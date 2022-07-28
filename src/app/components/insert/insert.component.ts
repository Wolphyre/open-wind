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

  constructor(private weatherServ: WeatherService, private renderer: Renderer2) { }



  ngOnInit(): void {
    
  }

  
  displayCord(lat: string, lng:  string){
    this.weatherServ.verifyValue(lat, lng)
    if (lat && lng) {
      this.weatherServ.getMeteoForecastWithLatLng(lat, lng).subscribe({
        next: data => this.forecastData = data,
        error: err => console.log(err)      
      })
    }
    const imgArrow = document.getElementById('arrow');
    this.renderer.setStyle(
      imgArrow,
      'transform',
      'rotate(90deg)'
    )
  }


}
