import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.html',
  styleUrls:['todo-item.css']
})
export class TodoItem {
  @Input() todo;
  @Output() toggle = new EventEmitter();
  
  constructor() { }


}