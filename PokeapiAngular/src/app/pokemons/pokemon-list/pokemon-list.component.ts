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
    limit: number = 25;
    offset: number = 0;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
      // this.pokemonService.getPokemonList(this.offset, this.limit)
      // .subscribe(
      //   (data: {results: Pokemon[]}) => { 
      //     this.listOfPokemons = [...this.listOfPokemons, ...data.results]; 
      //     console.log(data.results);
      //   }
      // );
      // this.offset += this.limit;
      // console.log(this.listOfPokemons);
      this.getPokemons();
    }
    
    getPokemons() {
        dataPokemons.results.map((pokemon, index) => {
            const id =  index + 1;
            const image = getPokemonImageUri(id);
            const color = pokemonColorMap[id];
            this.listOfPokemons.push({
                id: `#${id}`,
                name: pokemon.name,
                image: image,
                color: color
            });
        });
        this.filteredPokemons = [...this.listOfPokemons];
    }

    searchThis(searchCriteria: string) {
      if (searchCriteria) {
        this.filteredPokemons = this.listOfPokemons.filter((pokemon) => {
          return pokemon.name.includes(searchCriteria);
        });
      } else {
        this.filteredPokemons = [...this.listOfPokemons];
      }
    }
}