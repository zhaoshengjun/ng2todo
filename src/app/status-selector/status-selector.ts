import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'status-selector',
  template: `
    <select #statusSel (change)="status.emit(statusSel.value)">
      <option value="started">started</option>    
      <option value="completed">completed</option>
    </select>
  `
})
export class StatusSelector {
  @Output() status = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
    this.status.emit('started');
  }


}