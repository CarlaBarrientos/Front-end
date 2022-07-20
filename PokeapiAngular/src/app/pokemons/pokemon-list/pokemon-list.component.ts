import { Component } from '@angular/core';
import { Pokemon } from '../../core/models/Pokemon';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
    
    pokemons: Pokemon[] = [];

    constructor() { }

    setPokemons(pokemons: Pokemon[]) {
      this.pokemons = pokemons;
    }
}