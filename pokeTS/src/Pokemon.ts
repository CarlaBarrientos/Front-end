import axios, { AxiosResponse } from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves


List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class
*/
export function getSinglePokemon(id: string | number) {
  return axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function getNewPokemons(param: number) {
  return function <T extends { new(...args: any[]): { } }>(constructor: T) {
      return class extends constructor {
        getRandomIds() {
          const indexes = new Set<number>();
          while(indexes.size < param) {
            indexes.add(Math.floor(Math.random() * (500)))
          }
          return Array.from(indexes);
        }
        listOfIds = this.getRandomIds();
      }
  }
}

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
  name: string;
  url: string;
};

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: Pokemon) {
    this.buildFieldsPokemon(pokemonResult);
  }

  buildFieldsPokemon(pokemon: Pokemon) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    this.types = pokemon.types.map((type: any) => type.type as Type);
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`${this.id} ${this.name}`);
    console.log(`--------------------------`);
    this.types.forEach(type => {
      console.log(`${type.name}`);
    });
    console.log(`--------------------------`);
    this.moves.forEach(move => {
      console.log(`${move.name}`);
    });
  }

  async getFourMoves(moves: Move[]) {
    let fourMoves: Move[] = [];
    const size = moves.length;
    if(size > 4) {
        const indexes = this.generateUniqueRandom(size);
        fourMoves = indexes.map((index) => {
          return moves[index];
        });
    } else {
      fourMoves = moves;
    }

    const result = await Promise.all(fourMoves.map(async move => {
      const response = await this.getMoveInformation(move.url);
      move.accuracy = response.accuracy;
      move.damage = response.power;
      move.powerPoints = response.pp;
      move.type = response.type;
      return move;
    }));

    this.moves = result;
  }

  generateUniqueRandom(size: number): number[] {
    const indexes = new Set<number>();
    while(indexes.size < 4) {
      indexes.add(Math.floor(Math.random() * (size)))
    }
    return Array.from(indexes);
  }

  async getMoveInformation(url: string) {
    const response = await axios.get(url);
    return response.data;
  }
}

@getNewPokemons(3)
export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[];

  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
    const results = await Promise.all(listPokemons)
    await Promise.all(results.map(async (result) => {
      const newPokemon = await this.getPokemonInformation(result.data);
      this.pokemons.push(newPokemon);
    }));
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
    this.pokemons.forEach(async pokemon => {
      pokemon.displayInfo();
    });
  }

  async getPokemonInformation(pokemon: Pokemon) {
    const newPokemon = new Pokemon(pokemon);
    await newPokemon.getFourMoves(pokemon.moves.map((move: any) => move.move as Move));
    return newPokemon;
  }
}
 