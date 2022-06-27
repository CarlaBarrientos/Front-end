import { Component, OnInit } from '@angular/core';
import { dataPokemons, pokemonColorMap, getPokemonImageUri } from '../../utils/utils';
import { Pokemon } from '../../core/models/Pokemon';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    
    listOfPokemons: Pokemon[] = [];

    constructor() { }

    ngOnInit() {
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
            })
        });
    }

    searchThis(data: string) {
      if (data) {
        this.listOfPokemons = [];
        this.getPokemons();
        this.listOfPokemons = this.listOfPokemons.filter((pokemon) => {
          return pokemon.name.includes(data);
        })
      } else {
        this.listOfPokemons = [];
        this.getPokemons();
      }
    }
}