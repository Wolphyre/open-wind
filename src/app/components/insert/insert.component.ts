import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }


  
  logCord(lat: string, lng:  string){

    if (lat && lng) {
      console.log('lat'+ ' ' + lat + ' ' + ' ' + '&' + ' ' + ' ' + 'lng' + ' ' + lng);

    }
  }

}
