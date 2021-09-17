import { Component, OnInit } from '@angular/core';
import { todos } from 'src/app/models/placeholder.model';
import { TodosService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  todos: todos;
  erro: any;
  constructor(private todosService: TodosService) {
    this.getterTodos()
   }

  ngOnInit() {
  }
  getterTodos() {
    this.todosService.getTodos().subscribe((data: todos) => {
      this.todos = data
    }, 
    (error: any) => {
      this.erro = error;
    });
  }

}