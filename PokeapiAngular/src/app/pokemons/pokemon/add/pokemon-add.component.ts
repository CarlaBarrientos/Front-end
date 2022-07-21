import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from '../../pokemon.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-pokemon-add',
    templateUrl: './pokemon-add.component.html',
    styleUrls: ['./pokemon-add.component.scss']
})
export class PokemonAddComponent implements OnInit {
    profileForm = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', [Validators.required, Validators.minLength(5)]),
        image: new FormControl('', Validators.required),
        color: new FormControl('', Validators.required),
        height: new FormControl('', Validators.required),
        weight: new FormControl('', Validators.required),
        generation: new FormControl('', Validators.required),
        abilities: new FormControl('', Validators.required),
        types: new FormControl('', Validators.required),
        stats: new FormControl('', Validators.required)
    });
    generations: string[] = [];
    abilities: string[] = [];
    pokemonTypes: string[] = [];
    stats: string[] = [];

    constructor(private fb: FormBuilder,
        private pokemonService: PokemonService,
        private _snackBar: MatSnackBar) { }

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
        this._snackBar.open('Pokemon added succesfully!', 'Done');
    }

    fillGenerations() {
        this.pokemonService.getGenerations().subscribe((generations: { results: { name: string }[] }) => {
            generations.results.forEach(generation => {
                this.generations.push(generation.name)
            });
        });
    }

    fillAbilities() {
        this.pokemonService.getAbilities().subscribe((abilities: { results: { name: string }[] }) => {
            abilities.results.forEach(ability => {
                this.abilities.push(ability.name)
            });
        });
    }

    fillTypes() {
        this.pokemonService.getTypes().subscribe((types: { results: { name: string }[] }) => {
            types.results.forEach(type => {
                this.pokemonTypes.push(type.name)
            });
        });
    }

    fillStats() {
        this.pokemonService.getStats().subscribe((stats: { results: { name: string }[] }) => {
            stats.results.forEach(stat => {
                this.stats.push(stat.name)
            });
        });
    }

    getErrorDescription() {
        return this.profileForm.get('description')?.hasError('required') ? 'Enter some description' :
            'Description must contain at least 5 characters';
    }
}