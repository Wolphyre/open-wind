import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'arrowDirection'
})
export class ArrowDirectionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return './assets/arrow/north.svg';
      case  2:
        return './assets/arrow/north-east.svg';
        case  3:
          return './assets/arrow/east.svg';
        case  4:
          return './assets/arrow/south-east.svg';
        case  5:
            return './assets/arrow/south.svg';
        case  6:
            return './assets/arrow/south-west.svg';
        case  7:
            return './assets/arrow/west.svg';
        case  8:
            return './assets/arrow/north-east.svg'
    
      default:
        return './assets/arrow/Logo.png';
    }
  }

}
