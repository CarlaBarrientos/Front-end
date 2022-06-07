import axios from "axios";
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

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = [1];
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

  async buildFieldsPokemon(pokemon: Pokemon) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    // you can only choose four moves from the list of moves
    this.moves = this.getFourMoves(pokemon.moves.map((move: any) => move.move as Move));
    this.types = pokemon.types.map((type: any) => type.type as Type);
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`${this.id} ${this.name}`);
    this.types.forEach(type => {
      console.log(`${type.name}`);
    });
    this.moves.forEach(move => {
      console.log(`${move.name}`);
    });
  }

  getFourMoves(moves: Move[]) {
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

    fourMoves.forEach(move => {
      this.getMoveInformation(move.url)
        .then((resolve) => {
          move.accuracy = resolve.data.accuracy;
          move.damage = resolve.data.power;
          move.powerPoints = resolve.data.pp;
          move.type = resolve.data.type;
      });
    });

    return fourMoves;
  }

  generateUniqueRandom(size: number): number[] {
    const indexes = new Set<number>();
    while(indexes.size < 4) {
      indexes.add(Math.floor(Math.random() * (size)))
    }
    return Array.from(indexes);
  }

  async getMoveInformation(url: string) {
    return await axios.get(url);
  }
}

@getNewPokemons
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
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result.data));
    });
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
    this.pokemons.forEach(pokemon => {
      pokemon.displayInfo();
    });
  }

}
