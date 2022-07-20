import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../core/models/Pokemon';
import { PokemonService } from '../pokemon.service';

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
    @Output() pokemons = new EventEmitter<Pokemon[]>();

    constructor(private pokemonService: PokemonService,
        private router: ActivatedRoute) { }

    ngOnInit() {
        const pokemons = this.router.snapshot.data["pokemons"];
        this.pokemonList = pokemons.results.map((pokemon: { name: string, url: string }) => this.fillPokemonInformation(pokemon));
        this.filteredPokemons = this.pokemonList;
        this.sendPokemons(this.filteredPokemons);
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
        this.offset += this.limit;
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

    changeOffset(newOffset: number) {
        this.offset = newOffset;
        this.getPokemons();
    }

    sendPokemons(value: Pokemon[]) {
        this.pokemons.emit(value);
    }

}