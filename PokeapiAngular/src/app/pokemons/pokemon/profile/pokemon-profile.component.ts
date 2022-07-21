import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

    constructor(private route: ActivatedRoute,
        private router: Router,
        private pokemonService: PokemonService) { }

    async ngOnInit() {
        this.pokemonInformation = this.route.snapshot.data["pokemon"];
        this.pokemonInformation.evolution = [];
        this.getSpecies();
        this.pokemonInformation.image = this.pokemonService.getPokemonImageUri(this.pokemonInformation.id);
    }

    getSpecies() {
        this.pokemonService.getPokemonSpecies(this.pokemonInformation.id).subscribe(
            (specie: { flavor_text_entries: { flavor_text: string }[], evolution_chain: { url: string } }) => {
                this.pokemonInformation.description = specie.flavor_text_entries[0].flavor_text.trim();
                this.pokemonInformation.evolutionUrl = specie.evolution_chain.url;
                this.getEvolution();
            }
        );
    }

    getEvolution() {
        this.pokemonService.getPokemonEvolution(this.pokemonInformation.evolutionUrl).subscribe(
            (results: any) => {
                let evolutionData = results.chain;
                do {
                    const id = this.pokemonService.getPokemonId(evolutionData.species.url);
                    this.pokemonInformation.evolution.push({
                        id: this.pokemonService.getPokemonId(evolutionData.species.url as string),
                        name: evolutionData.species.name as string,
                        url: evolutionData.species.url as string,
                        image: this.pokemonService.getPokemonImageUri(id)
                    });

                    evolutionData = evolutionData['evolves_to'][0];
                } while (!!evolutionData && evolutionData.hasOwnProperty('evolves_to'));
            }
        );
    }

    goBack() {
        this.router.navigate(['/pokedex']);
    }

}