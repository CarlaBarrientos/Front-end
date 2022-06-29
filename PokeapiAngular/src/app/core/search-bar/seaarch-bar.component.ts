import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent { 

    searchWord: string = '';
    @Output() searchCriteria = new EventEmitter<string>();
    
    search() {
        this.searchCriteria.emit(this.searchWord);
    }
}