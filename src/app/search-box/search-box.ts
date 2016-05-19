import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  template: `
    <input #search type="text" (input)="update.emit(search.value.toUpperCase())">
  `  
})
  
export class SearchBox  {
  @Output() update = new EventEmitter();
  
  
  ngOnInit() {
    this.update.emit('');
  }

  
  
}