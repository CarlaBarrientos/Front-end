import { Pokemon } from "./Pokemon";

export interface PokemonInformation extends Pokemon {
    description: string,
    generation: string,
    height: string,
    weight: string,
    gender: string[],
    abilities: string[],
    type: string[],
    stats: string[]
}