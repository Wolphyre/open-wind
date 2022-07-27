import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WindForecast } from 'src/app/model/wind-forecast';
import { WeatherService } from 'src/app/services/weather-service/weather.service';

@Component({
  selector: 'app-wind-forecast',
  templateUrl: './wind-forecast.component.html',
  styleUrls: ['./wind-forecast.component.scss']
})
export class WindForecastComponent implements OnInit {

  forecastArray: WindForecast[] = [];

  constructor(private route: ActivatedRoute, private weatherServ: WeatherService ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['latlng']) {
      const latlng = this.route.snapshot.params['latlng'];
      const lat = latlng.split('@')[0];
      const lng = latlng.split('@')[1];
      this.weatherServ.getMeteoForecast(lat, lng).subscribe({
        next: (data) => this.forecastArray = data,
        error: (err) => console.log(err)
      });
    }
  }

}
