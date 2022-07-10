import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { PokemonService } from "../pokemon.service";

@Injectable({
    providedIn: "root"
})
export class PokemonsResolver implements Resolve<{ results: { name: string, url: string }[] }> {
    
    constructor(private pokemonService: PokemonService) { }
    
    resolve(): Observable<{ results: { name: string, url: string }[] }> | Promise<{ results: { name: string, url: string }[] }> | { results: { name: string, url: string }[] } {
        return this.pokemonService.getPokemonList();
    }

}