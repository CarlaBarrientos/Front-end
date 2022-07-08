import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../core/models/Pokemon";
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

    getPokemonImageUri(id: string) {
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

    getPokemonDescription(name: string) {
        return this.http.get(`${this.API}/pokemon-species/${name}`) as Observable<{ flavor_text_entries: { flavor_text: string }[] }>;
    }

    getPokemonInformation(name: string) {
        return this.http.get(`${this.API}/pokemon/${name}`) as Observable<{
            abilities: { ability: { name: string } }[],
            height: number,
            weight: number,
            types: { type: { name: string } }[],
            stats: { base_stat: number, stat: { name: string } }[]
        }
        >;
    }

    getGenerations() {
        return this.http.get(`${this.API}/generation`) as Observable<{ results: { name: string }[] }>;
    }

    getPokemonsByGeneration(generationName: string) {
        return this.http.get(`${this.API}/generation/${generationName}`) as Observable<{ pokemon_species: { name: string }[] }>;
    }

    getPokemonGeneration(name: string) {
        this.getGenerations()
            .subscribe((response: { results: { name: string }[] }) => {
                console.log(response.results);
                response.results.forEach((generation) => {
                    this.getPokemonsByGeneration(generation.name)
                        .subscribe((pokemons) => {
                            pokemons.pokemon_species.forEach((pokemon) => {
                                if(pokemon.name.includes(name.toLowerCase())){
                                    return generation.name;
                                } else {
                                    return '';
                                }
                            })
                        })
                })
            })
    }

}