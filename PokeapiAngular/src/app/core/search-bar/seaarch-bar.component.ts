import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent <T extends Record<keyof T, string | number>> { 

    searchWord: string = '';
    offset: number = 0;

    @Input() list: T[] = [];
    @Input() searchField!: keyof T;
    @Output() filteredList = new EventEmitter<T[]>();
    @Output() changeOffset = new EventEmitter<number>();
    
    search() {
        this.filteredList.emit(this.list.filter(element => (element[this.searchField] as string).includes(this.searchWord)));
    }

    onBlur() {
        this.changeOffset.emit(this.offset);
    }
}