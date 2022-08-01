import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrowDirectionName'
})
export class ArrowDirectionNamePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    const mod = 360 / 16;

    const degMod = value / 360;
    

    const turn = Math.floor(degMod);
    
    let deg = (degMod - turn) * 360;

    let dir = Math.floor(deg  / mod);
    // console.log('dir: ' + dir);

    dir = dir - Math.floor(dir / 16) * 16;
    // console.log('Nuova dir: ' + dir);
    
    switch (dir) {
      case 0:
        return 'North' ;
      case 1: 
        return 'North-north-east' ;
      case 2:
        return 'North-east';
      case 3:
        return 'East-north-east'  
      case 4: 
        return 'East';
      case 5:
        return 'East-south-east';
      case 6: 
        return 'South-east';
      case 7 :
        return 'South-south-east';
      case 8: 
        return 'South';
      case 9:
        return 'South-south-west';
      case 10: 
      return 'South-west';
      case 11:
        return 'West-south-west';
      case 12:
        return 'West';
      case 13:
        return 'West-north-west';
      case 14:
        return 'North-west';
      case 15:
        return 'North-north-west';
      default:
        // console.log(dir);
        return 'error'
    }
    }
  }
 



