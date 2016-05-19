import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  
  template: `
    <span [ngClass]="todo.status">{{todo.title}}</span>  
    <button (click)="toggle.emit(todo)">Toggle</button>
  `,
  styles: [`
    .completed{
      text-decoration: line-through;
    }
  `]
})
export class TodoItem {
  @Input() todo;
  @Output() toggle = new EventEmitter();
  
  constructor() { }


}