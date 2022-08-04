import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { WindForecast } from 'src/app/model/wind-forecast';
import { WeatherService } from 'src/app/services/weather-service/weather.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  public forecastData: WindForecast[] = [];
  public latlng: any = null;

  constructor(private weatherServ: WeatherService, private renderer: Renderer2) { }
  

  ngOnInit(): void {

  }

 changeLatLng(latlng:any){
  const latInput: HTMLInputElement | null = (document.getElementById("latInput")as HTMLInputElement) ;
  const lngInput: HTMLInputElement | null = (document.getElementById("lngInput")as HTMLInputElement) ;
  latInput!.value = latlng.lat;
  lngInput!.value = latlng.lng;
 }


  displayCord(lat: string, lng: string) {
    this.latlng = {lat, lng};
    this.weatherServ.verifyValue(lat, lng)
    if (lat && lng) {
      this.weatherServ.getMeteoForecastWithLatLng(lat, lng).subscribe({
        next: data => this.forecastData = data,
        error: err => console.log(err)
      })
    }

    
  }



  // ParseInt(value: string) {
  //   return parseInt(value)
  // }

  // modulo(value: number){
  //   if (value < 0 ) return value * -1 
  //   return value
      
    
  // }

  // funzioneDiProva(value: number) {
  //   console.log('inizio funzione di prova');

  //   for (value = 0; value < 366; value++) {
  //     console.log('value: ' + value);
      

  //     const mod = 360 / 12;

  //     const degMod = value / 360;
      

  //     const turn = Math.floor(degMod);
      
  //     let deg = (degMod - turn) * 360;

  //     let dir = Math.floor(deg  / mod);
  //     console.log('dir: ' + dir);

  //     dir = dir - Math.floor(dir / 11) * 11;
  //     console.log('Nuova dir: ' + dir);
      
  //     switch (dir) {
  //       case 0:
  //         // console.log('nord');

  //         // return 'nord'
  //         break;

  //       default:
  //         // console.log(dir);
  //         // return 'altro'
  //     }
  //   }

  //   return
  // }

}

