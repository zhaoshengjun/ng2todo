import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from "../todo-service/todo.service";
import { TodoModel } from '../todo-model/todo-model';
import { TodoItem } from '../todo-item/todo-item';
import { SearchPipe } from '../search-pipe/search-pipe';
import { StartedPipe } from '../started-pipe/started-pipe';

@Component({
  selector: 'todo-list',
  pipes:[SearchPipe,StartedPipe],
  directives:[TodoItem],
  template: `
    <ul>
      <li *ngFor="let todo of todoService.todos | search: term | started : status ">
        <todo-item 
          [todo]="todo" 
          (toggle)="todoService.toggleTodo($event)">
        </todo-item>
      </li>      
    </ul>
  `
})
export class TodoList implements OnInit{

  todos: TodoModel[];
  @Input() status;
  @Input() term;
  
  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

}
