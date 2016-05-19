import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'started'
})

export class StartedPipe implements PipeTransform {
  transform(value: any, status): any {
    // console.log(value,status);
    
    return value.filter((item) => item.status === status);
  }
}