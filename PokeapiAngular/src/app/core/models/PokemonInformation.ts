import { Pokemon } from "./Pokemon";
import { PokemonApi } from "./PokemonApi";

export interface PokemonInformation extends Pokemon {
    description: string,
    generation: string,
    height: string,
    weight: string,
    abilities: string[],
    types: string[],
    stats: string[],
    evolutionUrl: string,
    evolution: PokemonApi[]
}