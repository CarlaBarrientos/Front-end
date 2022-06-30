import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
    selector: 'app-pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: []
})
export class PokemonProfileComponent { 
    constructor(private location: Location) {}

    goBack() {
        this.location.back();
    }

}