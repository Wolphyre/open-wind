import { Component, OnInit } from '@angular/core';
import { WindForecast } from 'src/app/model/wind-forecast';
import { WeatherService } from 'src/app/services/weather-service/weather.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  public forecastData: WindForecast[] = [];

  constructor(private weatherServ: WeatherService) { }



  ngOnInit(): void {
  }

  // verifyValue(lat: string, lng: string){
  //   let latNUmeric = Number(lat);
  //   let lngNUmeric = Number(lng);
  //   if (latNUmeric < -91 || latNUmeric >= 89.9 ) {
  //     alert('Errore, la latitudine deve essere un valore entro -90° e 89.9°')
  //   } else if (lngNUmeric < -1 || lngNUmeric > 180) {
  //     alert('Errore, la longitudine deve essere un valore entro 0° e 179.9°')
  //   }
  // }
  
  displayCord(lat: string, lng:  string){
    this.weatherServ.verifyValue(lat, lng)
    if (lat && lng) {
      this.weatherServ.getMeteoForecastWithLatLng(lat, lng).subscribe({
        next: data => this.forecastData = data,
        error: err => console.log(err)      
      })
    }
  }


}
