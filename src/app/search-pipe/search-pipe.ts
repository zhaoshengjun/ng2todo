import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../todo-model/todo-model';
@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(value: TodoModel[], term: string): any {
    return value.filter((todo) => {
      return todo.title.toUpperCase().startsWith(term);
    });
  }
}