import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'status-selector',
  template: `
    <button (click)="status.emit('all')" class="clear-completed">all</button>
    <button (click)="status.emit('started')" class="clear-completed">started</button>
    <button (click)="status.emit('completed')" class="clear-completed">completed</button>
  `
})
export class StatusSelector {
  @Output() status = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.status.emit('all');
  }
}