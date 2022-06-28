import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent { 

    searchword: string = '';
    @Output() searchcriteria = new EventEmitter<string>();
    search() {
        this.searchcriteria.emit(this.searchword);
    }
}