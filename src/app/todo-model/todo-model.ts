// interface TodoModel {
//   status: TodoStatus;
//   name: string;
// }

// enum TodoStatus {
//   added,
//   started,
//   pending,
//   finished,
//   cancelled
// }

export class TodoModel {
  constructor(public title: string = "", public status: string = "started") {
    
  }
  
  toggleStatus() {
    this.status = this.status === "started" ? "completed" : "started";
  }
} 