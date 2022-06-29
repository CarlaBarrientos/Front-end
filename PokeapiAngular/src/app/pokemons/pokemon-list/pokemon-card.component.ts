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

    setColorName() {
        if(['#fbf6f6', '#f0f060e6', '#ffb6c3'].includes(this.pokemonInformation.color)) {
            return 'black';
        } else {
            return 'white'
        }
    }
}