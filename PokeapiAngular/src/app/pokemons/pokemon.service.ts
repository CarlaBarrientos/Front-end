import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonInformation } from "../core/models/PokemonInformation";
import { pokemonColorMap } from "../utils/utils";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private http: HttpClient) { }

    private API = 'https://pokeapi.co/api/v2';

    getPokemonList(offset: number = 0, limit: number = 50) {
        return this.http
            .get(`${this.API}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{ results: { name: string, url: string }[] }>;
    }

    getPokemonImageUri(id: string): string {
        const parseId = ('00' + id).slice(-3)
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${parseId}.png`;
    }

    getPokemonColor(id: string) {
        return pokemonColorMap[id];
    }

    getPokemonId(url: string) {
        const dividedUrl = url.split('/');
        const id = dividedUrl[dividedUrl.length - 2];
        return id;
    }

    getPokemonSpecies(id: string) {
        return this.http.get(`${this.API}/pokemon-species/${id}`) as Observable<{
            flavor_text_entries: { flavor_text: string }[],
            evolution_chain: { url: string }
        }>;
    }

    getPokemonInformation(id: string) {
        return this.http.get(`${this.API}/pokemon/${id}`) as Observable<PokemonInformation>;
        // return this.http.get(`${this.API}/pokemon/${name}`) as Observable<{
        //     abilities: { ability: { name: string } }[],
        //     height: number,
        //     weight: number,
        //     types: { type: { name: string } }[],
        //     stats: { base_stat: number, stat: { name: string } }[]
        // }
        // >;
    }

    getPokemonEvolution(url: string) {
        return this.http.get(url) as Observable<{
            chain: {
                evolves_to: {
                    evolves_to: {
                        species: { name: string, url: string }
                    },
                    species: { name: string, url: string }
                }
            },
            species: { name: string, url: string }
        }>;
    }

    getPokemonsByGeneration(generationName: string) {
        return this.http.get(`${this.API}/generation/${generationName}`) as Observable<{ pokemon_species: { name: string, url: string }[] }>;
    }

    getGenerations() {
        return this.http.get(`${this.API}/generation`) as Observable<{ results: { name: string }[] }>;
    }

    getAbilities() {
        return this.http.get(`${this.API}/ability`) as Observable<{ results: { name: string }[] }>;
    }

    getTypes() {
        return this.http.get(`${this.API}/type`) as Observable<{ results: { name: string }[] }>;
    }

    getStats() {
        return this.http.get(`${this.API}/stat`) as Observable<{ results: { name: string }[] }>;
    }

}