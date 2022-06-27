import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: []
})
export class SearchBarComponent { 

    searchword: string = '';
    @Output() searchcriteria = new EventEmitter<string>();
    searchThis() {
        this.searchcriteria.emit(this.searchword)
    }
}