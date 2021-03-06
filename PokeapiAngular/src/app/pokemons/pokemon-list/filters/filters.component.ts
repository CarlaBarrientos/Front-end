import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../core/models/Pokemon';
import { PokemonService } from '../../pokemon.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    pokemonList: Pokemon[] = [];
    filteredPokemons: Pokemon[] = [];
    limit: number = 50;
    offset: number = 0;
    generations: string[] = [];
    selectedGeneration: string = '';
    selectedOption: string = '';

    @Output() pokemons = new EventEmitter<Pokemon[]>();

    constructor(private pokemonService: PokemonService,
        private router: ActivatedRoute) { }

    ngOnInit() {
        const pokemons = this.router.snapshot.data["pokemons"];
        this.pokemonList = pokemons.results.map((pokemon: { name: string, url: string }) => this.fillPokemonInformation(pokemon));
        this.filteredPokemons = this.pokemonList;
        this.sendPokemons(this.filteredPokemons);
        this.fillGenerations();
    }

    getPokemons() {
        this.pokemonService.getPokemonList(this.offset, this.limit)
            .subscribe(
                (pokemons: { results: { name: string, url: string }[] }) => {
                    this.pokemonList = pokemons.results.map((pokemon) => this.fillPokemonInformation(pokemon));
                    this.filteredPokemons = this.pokemonList;
                    this.sendPokemons(this.filteredPokemons);
                }
            );
    }

    fillPokemonInformation(pokemon: { name: string, url: string }): Pokemon {
        const pokemonId = this.pokemonService.getPokemonId(pokemon.url);

        return {
            id: `#${pokemonId}`,
            name: pokemon.name,
            image: this.pokemonService.getPokemonImageUri(pokemonId),
            color: this.pokemonService.getPokemonColor(Number(pokemonId).toString())
        }

    }

    searchThis(filteredPokemons: Pokemon[]) {
        this.filteredPokemons = filteredPokemons;
        this.sendPokemons(this.filteredPokemons);
    }

    changeOffsetOrLimit() {
        if (this.selectedGeneration !== '') {
            this.getPokemonsByGeneration(this.selectedGeneration)
        } else {
            this.getPokemons();
        }
    }

    sendPokemons(value: Pokemon[]) {
        this.pokemons.emit(value);
    }

    fillGenerations() {
        this.pokemonService.getGenerations().subscribe((generations: { results: { name: string }[] }) => {
            generations.results.forEach(generation => {
                this.generations.push(generation.name)
            });
        });
    }

    orderAlphabetically(value: string) {
        this.filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
        if (value === 'falling') {
            this.filteredPokemons.reverse();
        }
    }

    getPokemonsByGeneration(generation: string) {
        this.pokemonService.getPokemonsByGeneration(generation).subscribe((pokemons: { pokemon_species: { name: string, url: string }[] }) => {
            if(!this.limit) {
                this.limit = 50;
            }
            if(!this.offset) {
                this.offset = 0;
            }
            const limitedPokemons = pokemons.pokemon_species.slice(this.offset, this.limit);
            this.pokemonList = limitedPokemons.map((pokemon) => this.fillPokemonInformation(pokemon));
            this.filteredPokemons = this.pokemonList;
            if (this.selectedOption !== '') {
                this.orderAlphabetically(this.selectedOption);
            }
            this.sendPokemons(this.filteredPokemons);
        });
    }

}