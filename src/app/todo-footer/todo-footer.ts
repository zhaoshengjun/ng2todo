import { Component, Output, EventEmitter } from '@angular/core';
import { StatusSelector } from '../status-selector/status-selector';

@Component({
  moduleId: module.id,
  directives:[StatusSelector],
  selector: 'todo-footer',
  templateUrl: 'todo-footer.html'
})
export class TodoFooter {
  @Output() statusFilter = new EventEmitter();
  constructor() { }
  
  ngOnInit() {
    this.statusFilter.emit('all');
  }
}