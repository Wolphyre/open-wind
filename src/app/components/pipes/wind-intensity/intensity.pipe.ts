import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intensity'
})
export class IntensityPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value < 2) {
      console.log(value ,'calm');
      return './assets/wind-intensity/wind-int-calm.svg';
  } else if (value < 6){
    console.log(value , 'greenn');
    return './assets/wind-intensity/wind-int-green.svg';
  } else if (value < 15) {
    console.log(value , 'yellow');
    return './assets/wind-intensity/wind-int-yellow.svg';
  } else {
    console.log(value, 'red');
    return './assets/wind-intensity/wind-int-red.svg';
  }
  }
}
