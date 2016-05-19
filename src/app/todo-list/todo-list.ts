import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from "../todo-service/todo.service";
import { TodoModel } from '../todo-model/todo-model';
import { TodoItem } from '../todo-item/todo-item';
import { SearchPipe } from '../search-pipe/search-pipe';
import { StartedPipe } from '../started-pipe/started-pipe';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  pipes:[SearchPipe,StartedPipe],
  directives: [TodoItem],
  templateUrl: 'todo-list.html',
  styleUrls:['todo-list.css']
})
export class TodoList implements OnInit{

  todos: TodoModel[];
  @Input() status;
  @Input() term;
  
  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

}
