import { Component, OnInit } from '@angular/core';
import { dataPokemons, pokemonColorMap, getPokemonImageUri } from '../../utils/utils';
import { Pokemon } from '../../core/models/Pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    
    listOfPokemons: Pokemon[] = [];
    filteredPokemons: Pokemon[] = [];
    limit: number = 50;
    offset: number = 0;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
      this.getPokemons();
    }

    getPokemons() {
      this.pokemonService.getPokemonList(this.offset, this.limit)
      .subscribe(
        (pokemons: {results: { name: string, url: string }[]}) => { 
          this.listOfPokemons = pokemons.results.map((pokemon) => this.fillPokemonInformation(pokemon)); 
          this.filteredPokemons = this.listOfPokemons;
        }
      );
      this.offset += this.limit;
    }

    fillPokemonInformation(pokemon: { name: string, url: string }): Pokemon {
      const pokemonId = this.pokemonService.getPokemonId(pokemon.url);
      
      return {
        id: `#${pokemonId}`,
        name: pokemon.name,
        image: this.pokemonService.getPokemonImageUri(pokemonId),
        color: this.pokemonService.getPokemonColor(Number(pokemonId).toString())
      }

    }

    searchThis(searchCriteria: string) {
      if (searchCriteria) {
        this.filteredPokemons = this.listOfPokemons.filter((pokemon) => {
          return pokemon.name.includes(searchCriteria);
        });
      } else {
        this.filteredPokemons = this.listOfPokemons;
      }
    }

    changeOffset(newOffset: number) {
      this.offset = newOffset;
      this.getPokemons();
    }
}