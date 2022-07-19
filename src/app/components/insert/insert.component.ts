import { Component, OnInit } from '@angular/core';

var lat = document.getElementById('lat');
var lng = document.getElementById('lng');

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  logCord(){
    if (lat) {
      console.log(lat);

    }

     if (lng) {
      console.log(lng);

    } else{
      console.log('click');
    }

  }

}
