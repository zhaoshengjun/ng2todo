import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl : 'todo-app.html', 
  // templateUrl: 'app/todo-app/todo.component.html',
  // template : `
  //   <h1>
  //     {{title}}
  //   </h1>
  // ` 
  styleUrls: ['todo-app.css']
})
export class TodoApp {
  title = 'Todo works still!';
}
