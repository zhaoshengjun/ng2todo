import { Component } from '@angular/core';
import {TodoService} from '../todo-service/todo.service';
import { TodoModel } from '../todo-model/todo-model';

@Component({
  moduleId: module.id,
  selector: 'todo-input',
  template: `
  <form (submit)="onSubmit()">
    <input type="text" [(ngModel)]="todoModel.title" class="new-todo">
  </form>
  `,
  styleUrls:['todo-input.css']
})
export class TodoInput  {

  todoModel = new TodoModel();

  constructor(public todoService: TodoService) {
    // console.log(todoService);
    
  }
  
  onSubmit() {
    // console.log(value);
    this.todoService.addTodo(this.todoModel);
    this.todoModel = new TodoModel();
  }

}
