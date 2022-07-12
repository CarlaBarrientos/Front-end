import { Pokemon } from "./Pokemon";

export interface PokemonInformation extends Pokemon {
    description: string,
    generation: string,
    height: string,
    weight: string,
    gender: string[],
    abilities: string[],
    types: string[],
    stats: string[]
}