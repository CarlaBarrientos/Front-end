import { Component } from '@angular/core';
import { Pokemon } from '../core/models/Pokemon';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: []
})
export class PokemonListComponent {

    listOfPokemons: Pokemon[] = [];
    pokemon: Pokemon = {
        name: 'Bulbasaur',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        color: '#4ca04c'
    }

    constructor() { }
}