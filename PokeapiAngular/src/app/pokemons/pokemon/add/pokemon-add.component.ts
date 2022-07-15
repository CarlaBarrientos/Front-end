import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
        weight: new FormControl('')
    })
    
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
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
}