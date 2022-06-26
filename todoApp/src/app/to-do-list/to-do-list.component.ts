import { Component, OnInit } from '@angular/core';

type Task = {
    descripcion: string;
    hecho: boolean;
}
@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class TodoListComponent implements OnInit {
    nuevaTarea: string = '';
    listaTareas: Task[] = [];

    constructor() { }
    ngOnInit(): void {
    }

    crearTarea() {
        this.listaTareas.push({
            descripcion: this.nuevaTarea,
            hecho: false        
        });
        this.nuevaTarea = '';
    }

    eliminarTarea(index: number) {
        this.listaTareas.splice(index, 1);
    }

    marcarTarea(index: number) {
        this.listaTareas[index].hecho = !this.listaTareas[index].hecho;
    }
}