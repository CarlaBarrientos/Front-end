import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PokemonService } from '../../pokemon.service';

@Component({
    selector: 'app-pokemon-add',
    templateUrl: './pokemon-add.component.html',
    styleUrls: ['./pokemon-add.component.scss']
})
export class PokemonAddComponent implements OnInit {
    profileForm = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        image: new FormControl(''),
        color: new FormControl(''),
        height: new FormControl(''),
        weight: new FormControl(''),
        generation: new FormControl(''),
        abilities: new FormControl(''),
        types: new FormControl(''),
        stats: new FormControl('')
    });
    generations: string[] = [];
    abilities: string[] = [];
    pokemonTypes: string[] = [];
    stats: string[] = [];

    constructor(private fb: FormBuilder,
        private pokemonService: PokemonService) { }

    ngOnInit(): void {
        this.fillGenerations();
        this.fillAbilities();
        this.fillTypes();
        this.fillStats();
    }

    get types() {
        return this.profileForm.get('types') as FormArray;
    }

    adddType() {
        this.types.push(this.fb.control(''));
    }

    onSubmit() {
        console.warn(this.profileForm.value);
    }

    fillGenerations() {
        this.pokemonService.getGenerations().subscribe((generations: { results: { name: string }[]} ) => {
            generations.results.forEach(generation => {
                this.generations.push(generation.name)
            });
        });
    }

    fillAbilities() {
        this.pokemonService.getAbilities().subscribe((abilities: { results: { name: string }[]} ) => {
            abilities.results.forEach(ability => {
                this.abilities.push(ability.name)
            });
        });
    }

    fillTypes() {
        this.pokemonService.getTypes().subscribe((types: { results: { name: string }[]} ) => {
            types.results.forEach(type => {
                this.pokemonTypes.push(type.name)
            });
        });
    }

    fillStats() {
        this.pokemonService.getStats().subscribe((stats: { results: { name: string }[]} ) => {
            stats.results.forEach(stat => {
                this.stats.push(stat.name)
            });
        });
    }
}