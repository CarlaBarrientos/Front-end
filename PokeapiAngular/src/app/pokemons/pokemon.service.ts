import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../core/models/Pokemon";
import { pokemonColorMap } from "../utils/utils";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private http: HttpClient) {}

    private api = 'https://pokeapi.co/api/v2';

    getPokemonList(offset: number = 0, limit: number = 25) {
        return this.http
        .get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: { name: string, url: string }[]}>;
    }

    getPokemonImageUri(id: string) {
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    }

    getPokemonColor(id: string) {
        return pokemonColorMap[id];
    }

    getPokemonId(url: string) {
        const dividedUrl = url.split('/');
        const id = dividedUrl[dividedUrl.length - 2];
        return ('00' + id).slice(-3);
    }
}