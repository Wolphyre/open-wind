import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'arrowDirection'
})
export class ArrowDirectionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const mod = 360 / 8;
    const degMod =  value / 360;
    console.log('value: ' + value  );
    
    const turn = Math.floor(degMod);
    let deg = (degMod - turn) * 360 ;
    console.log('deg: ' + deg);
    
    let dir = Math.floor( (deg - (mod / 2)) / mod );
    console.log('dir: ' + dir );
    
    switch (dir) {
      case 0: 
       console.log('nord');
       
        return 'nord'
      
    
      default:
        console.log(dir);
        return 'altro'
    }
  }
 

}
