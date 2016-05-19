import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'started'
})

export class StartedPipe implements PipeTransform {
  transform(value: any, status): any {
    if (status === 'all') {
      return value;
    } else {
      return value.filter((item) => item.status === status);
    }
  }
}