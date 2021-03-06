import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonApi } from 'src/app/core/models/PokemonApi';

@Component({
    selector: 'app-evolution-card',
    templateUrl: './evolution-card.component.html',
    styleUrls: ['./evolution-card.component.scss']
})
export class EvolutionCardComponent {

    @Input() evolutions!: PokemonApi[];

    constructor(private router: Router) { }

    redirectToProfile(pokemonId: string) {
        this.router.navigate(['/pokedex/', `#${pokemonId}`])
        .then(() => {
          window.location.reload();
        });
    }
}