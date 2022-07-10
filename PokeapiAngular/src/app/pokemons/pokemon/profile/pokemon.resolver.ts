import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { PokemonInformation } from "src/app/core/models/PokemonInformation";
import { PokemonService } from "../../pokemon.service";

@Injectable({
    providedIn: "root"
})
export class PokemonResolver implements Resolve<PokemonInformation> {
    constructor(private pokemonService: PokemonService){ }

    resolve(route: ActivatedRouteSnapshot): Observable<PokemonInformation> | Promise<PokemonInformation> | PokemonInformation {
        return this.pokemonService.getPokemonInformation(route.paramMap.get('id') || '1');
    }
}