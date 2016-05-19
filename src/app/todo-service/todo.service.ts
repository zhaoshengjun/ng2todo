import { Injectable } from '@angular/core';
import {TodoModel}  from "../todo-model/todo-model";

@Injectable()
export class TodoService {

  todos = [
    new TodoModel("Eat"),
    new TodoModel("Sleep","completed"),
    new TodoModel("Swim"),
    new TodoModel("Walk","completed"),
    new TodoModel("Code")    
  ]
  
  addTodo(todo: TodoModel) {
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo: TodoModel) {
    console.log(todo);
    todo.toggleStatus();
    const i = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, i),
      todo,
      ...this.todos.slice(i + 1)
    ];
  }
}
