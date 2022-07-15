import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { PokemonInformation } from 'src/app/core/models/PokemonInformation';
@Component({
    selector: 'app-pokemon-profile',
    templateUrl: './pokemon-profile.component.html',
    styleUrls: ['./pokemon-profile.component.scss']
})
export class PokemonProfileComponent implements OnInit {

    pokemonId!: string;
    pokemonInformation!: PokemonInformation;

    constructor(private location: Location,
        private route: ActivatedRoute,
        private pokemonService: PokemonService) { }

    async ngOnInit() {
        this.pokemonInformation = this.route.snapshot.data["pokemon"];
        console.log(this.pokemonInformation)
        this.pokemonService.getPokemonDescription(this.pokemonInformation.id).subscribe(
            (descriptions: { flavor_text_entries: { flavor_text: string }[] }) => {
                this.pokemonInformation.description = descriptions.flavor_text_entries[0].flavor_text.trim();
            }
        );
        this.pokemonInformation.image = this.pokemonService.getPokemonImageUri(this.pokemonInformation.id);
        // this.pokemonId = this.route.snapshot.paramMap.get('id')!;
        // console.log(this.pokemonId)
        // this.pokemonService.getPokemonDescription(this.pokemonId)
        //     .subscribe(
        //         (descriptions: { flavor_text_entries: { flavor_text: string }[] }) => {
        //             console.log(descriptions.flavor_text_entries[0]);
        //         }
        //     );
        // this.pokemonService.getPokemonInformation(this.pokemonId)
        //     .subscribe((response: {
        //         abilities: { ability: { name: string } }[], 
        //         height: number, 
        //         weight: number,
        //         types: { type: { name: string } }[],
        //         stats: { base_stat: number, stat: { name: string } }[]
        //     }) => {
        //         console.log(response.abilities);
        //         console.log(response.height);
        //         console.log(response.weight);
        //         console.log(response.types);
        //         console.log(response.stats);
        //     });
        // const generation = this.pokemonService.getPokemonGeneration(this.pokemonId);
        // console.log(generation)
    }

    goBack() {
        this.location.back();
    }

}