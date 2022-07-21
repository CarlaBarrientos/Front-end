import { Component, Input, OnInit } from '@angular/core';
import { pokemonTypeColorMap } from 'src/app/utils/utils';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit { 
    @Input()
    type!: string;
    color: string = 'white';
    constructor() { }

    ngOnInit(): void {
        this.color = this.getTagColor(this.type)
    }

    getTagColor(type: string) {
        return pokemonTypeColorMap[type];
    }
}