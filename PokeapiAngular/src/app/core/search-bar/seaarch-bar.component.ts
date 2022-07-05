import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent { 

    searchWord: string = '';
    offset: number = 0;
    @Output() searchCriteria = new EventEmitter<string>();
    @Output() changeOffset = new EventEmitter<number>();
    
    search() {
        this.searchCriteria.emit(this.searchWord);
    }

    onBlur() {
        console.log(this.offset);
        this.changeOffset.emit(this.offset);
    }
}