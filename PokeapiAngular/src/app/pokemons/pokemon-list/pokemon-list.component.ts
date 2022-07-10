import { Component, OnInit } from '@angular/core';
import { dataPokemons, pokemonColorMap, getPokemonImageUri } from '../../utils/utils';
import { Pokemon } from '../../core/models/Pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    
    pokemonList: Pokemon[] = [];
    filteredPokemons: Pokemon[] = [];
    limit: number = 50;
    offset: number = 0;

    constructor(private pokemonService: PokemonService,
      private router: ActivatedRoute) { }

    ngOnInit() {
      const pokemons = this.router.snapshot.data["pokemons"];
      this.getPokemons(pokemons);
    }

    getPokemons(pokemons: {results: { name: string, url: string }[]}) {
      
      this.pokemonList = pokemons.results.map((pokemon: { name: string, url: string }) => this.fillPokemonInformation(pokemon)); 
      this.filteredPokemons = this.pokemonList;
      // this.pokemonService.getPokemonList(this.offset, this.limit)
      // .subscribe(
      //   (pokemons: {results: { name: string, url: string }[]}) => { 
      //     this.pokemonList = pokemons.results.map((pokemon) => this.fillPokemonInformation(pokemon)); 
      //     this.filteredPokemons = this.pokemonList;
      //   }
      // );
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

    searchThis(filteredPokemons: Pokemon[]) {
        this.filteredPokemons = filteredPokemons;
    }

    changeOffset(newOffset: number) {
      this.offset = newOffset;
      this.getPokemons(this.router.snapshot.data["pokemons"]);
    }
}