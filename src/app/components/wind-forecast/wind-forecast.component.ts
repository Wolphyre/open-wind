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


  constructor(private route: ActivatedRoute, private weatherServ: WeatherService ) { }

  ngOnInit(): void {

  }

}
