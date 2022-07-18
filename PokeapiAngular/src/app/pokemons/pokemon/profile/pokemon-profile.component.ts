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
        console.log(this.route.snapshot.data["pokemon"])
        //this.route.params.subscribe(routeParams => {
            this.pokemonInformation = this.route.snapshot.data["pokemon"];
        this.pokemonInformation.evolution = [];
        this.pokemonService.getPokemonSpecies(this.pokemonInformation.id).subscribe(
            (specie: { flavor_text_entries: { flavor_text: string }[], evolution_chain: { url: string } }) => {
                this.pokemonInformation.description = specie.flavor_text_entries[0].flavor_text.trim();
                this.pokemonInformation.evolutionUrl = specie.evolution_chain.url;
                this.pokemonService.getPokemonEvolution(this.pokemonInformation.evolutionUrl).subscribe(
                    (results: any) => {
                        var evoData = results.chain;

                        do {
                            var evoDetails = evoData['evolution_details'][0];
                            const id = this.pokemonService.getPokemonId(evoData.species.url);
                            this.pokemonInformation.evolution.push({
                                id: this.pokemonService.getPokemonId(evoData.species.url as string),
                                name: evoData.species.name as string,
                                url: evoData.species.url as string,
                                image: this.pokemonService.getPokemonImageUri(id)
                            });

                            evoData = evoData['evolves_to'][0];
                        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
                    }
                );
            }
        );
        this.pokemonInformation.image = this.pokemonService.getPokemonImageUri(this.pokemonInformation.id);
        console.log(this.pokemonInformation);
        //});
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