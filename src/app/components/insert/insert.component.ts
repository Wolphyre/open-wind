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


  
  displayCord(lat: string, lng:  string){
    if (lat && lng) {
      console.log('lat'+ ' ' + lat + ' ' + ' ' + '&' + ' ' + ' ' + 'lng' + ' ' + lng);
      this.weatherServ.getMeteoForecastWithLatLng(lat, lng).subscribe({
        next: data => this.forecastData = data,
        error: err => console.log(err)      
      })
    }
  }
}
