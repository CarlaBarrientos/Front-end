import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    list: string[] = ['Homework', 'Clean', 'Cook'];
    constructor() { }
    ngOnInit(): void {
    }

}