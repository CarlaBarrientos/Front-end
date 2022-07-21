import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../../core/models/Pokemon';

@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
    @Input()
    pokemonInformation!: Pokemon;
    
    constructor(private router: Router) { }

    setColorName() {
        if(['#fbf6f6', '#f0f060e6', '#ffb6c3'].includes(this.pokemonInformation.color)) {
            return 'black';
        } else {
            return 'white'
        }
    }

    redirectToProfile() {
        this.router.navigate(['/pokedex/', this.pokemonInformation.id]);
    }
}