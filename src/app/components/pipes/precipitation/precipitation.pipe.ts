import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precipitation'
})
export class PrecipitationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value > 0) {
      return './assets/precipitation/water-drop.svg'
    } else {
      return './assets/precipitation/no-water-drop.svg';
    }
  }

}
