import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace('T', ' ');
    
  }

}
