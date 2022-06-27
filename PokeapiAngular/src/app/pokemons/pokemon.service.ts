import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../core/models/Pokemon";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private http: HttpClient) {}

    private api = 'https://pokeapi.co/api/v2';

    getPokemonList(offset: number = 0, limit: number = 25) {
        return this.http
        .get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>;
    }
}