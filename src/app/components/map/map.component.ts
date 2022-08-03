import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;


  private initMap(): void {
    this.map = L.map('map', {
     center: [ 44.40, 8.94],
      zoom: 12 
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 16,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}