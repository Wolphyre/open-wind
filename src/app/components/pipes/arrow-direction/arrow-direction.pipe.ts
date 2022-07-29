import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'arrowDirection'
})
export class ArrowDirectionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    const mod = 360 / 8;

    const degMod = value / 360;
    

    const turn = Math.floor(degMod);
    
    let deg = (degMod - turn) * 360;

    let dir = Math.floor(deg  / mod);
    console.log('dir: ' + dir);

    dir = dir - Math.floor(dir / 8) * 8;
    console.log('Nuova dir: ' + dir);
    
    switch (dir) {
      case 0:
        return './assets/arrow/north-east.svg';
      case 1: 
        return './assets/arrow/north-east.svg' ;
      case 2:
        return './assets/arrow/east.svg';
      case 3:
        return './assets/arrow/south-east.svg'  
      case 4: 
        return './assets/arrow/south.svg';
      case 5:
        return './assets/arrow/south-west.svg';
      case 6: 
        return './assets/arrow/west.svg';
      case 7 :
        return './assets/arrow/north-west.svg';
      default:
        console.log(dir);
        return 'errore'
    }
    }
  }
 


