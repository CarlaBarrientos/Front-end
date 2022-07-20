import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: []
})
export class SearchBarComponent <T extends Record<keyof T, string | number>> { 

    searchWord: string = '';

    @Input() list: T[] = [];
    @Input() searchField!: keyof T;
    @Output() filteredList = new EventEmitter<T[]>();
    
    search() {
        this.filteredList.emit(this.list.filter(element => (element[this.searchField] as string).includes(this.searchWord)));
    }
}