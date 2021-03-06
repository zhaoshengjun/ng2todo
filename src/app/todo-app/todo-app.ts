import { Component } from '@angular/core';
import { TodoInput } from "../todo-input/todo-input";
import { TodoList } from "../todo-list/todo-list";
import { TodoService } from '../todo-service/todo.service';
import { StatusSelector } from '../status-selector/status-selector';
import { SearchBox } from '../search-box/search-box';
import { TodoFooter } from '../todo-footer/todo-footer';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl:'todo-app.html',
  styleUrls:['todo-app.css'],
  directives: [TodoInput, TodoList, StatusSelector, SearchBox, TodoFooter],
  providers:[TodoService]
})
export class TodoApp {
  title = 'Todos';
  status: string;
  term: string ;

  constructor(private _todoService: TodoService) { }
 
}
