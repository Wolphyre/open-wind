import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'arrowDirection'
})
export class ArrowDirectionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return
  }

}
