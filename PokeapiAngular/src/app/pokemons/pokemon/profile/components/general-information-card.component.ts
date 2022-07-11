import { Component, Input, OnInit } from '@angular/core';
import { PokemonInformation } from 'src/app/core/models/PokemonInformation';

@Component({
    selector: 'app-general-information-card',
    templateUrl: './general-information-card.component.html',
    styleUrls: ['./general-information-card.component.scss']
})
export class GeneralInformationComponent implements OnInit{

    @Input() pokemonInfo!: PokemonInformation;
    weight!: string;
    height!: string;
    abilities!: string[];

    constructor() { }

    ngOnInit(): void {
        this.weight = this.pokemonInfo.weight;
        this.height = this.pokemonInfo.height;
        this.abilities = this.pokemonInfo.abilities.map((ability: any) => {
            return ability.ability.name;
        });
        console.log(this.abilities);
    }

}