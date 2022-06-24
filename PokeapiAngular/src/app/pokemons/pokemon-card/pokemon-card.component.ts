import { Component, Input } from '@angular/core';
import { Pokemon } from '../../core/models/Pokemon';

@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
    @Input()
    pokemonInformation!: Pokemon;
    
    constructor() { }
}