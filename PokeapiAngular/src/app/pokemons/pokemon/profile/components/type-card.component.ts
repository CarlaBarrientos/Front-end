import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-type-card',
    templateUrl: './type-card.component.html',
    styleUrls: ['./type-card.component.scss']
})
export class TypeCardComponent implements OnInit {

    @Input() types!: string[];
    parseTypes!: string[];

    constructor() { }
    ngOnInit(): void {
        this.parseTypes = this.types.map((type: any) => {
            return type.type.name;
        })
    }
}