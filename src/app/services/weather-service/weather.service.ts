import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { WindForecast } from 'src/app/model/wind-forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private readonly URL = 'https://api.open-meteo.com/v1/forecast?hourly=precipitation,windspeed_10m,windspeed_80m,windspeed_120m,windspeed_180m,winddirection_10m,winddirection_80m,winddirection_120m,winddirection_180m,windgusts_10m&timezone=Europe%2FBerlin'

  constructor(private http: HttpClient) { }

  getMeteoForecastWithLatLng(lat: string, lng: string) {
    const url = this.URL + '&latitude=' + lat + '&longitude=' + lng;
    return this.http.get<WindForecast[]>(url).pipe(
      map(data => this.parseWindData(data))
    );
  }


  parseWindData(data: any) {
    const timeArray = data.hourly.time
    const precipitationArray = data.hourly.precipitation;
    const windSpeedArray10m = data.hourly.windspeed_10m;
    const windSpeedArray80m = data.hourly.windspeed_80m;
    const windSpeedArray120m = data.hourly.windspeed_120m;
    const windSpeedAray180m = data.hourly.windspeed_180m;
    const windDirectionArray10m = data.hourly.winddirection_10m;
    const windDirectionArray80m = data.hourly.winddirection_80m;
    const windDirectionArray120m = data.hourly.winddirection_120m;
    const windDirectionArray180m = data.hourly.winddirection_180m;
    const windGustArray = data.hourly.windgusts_10m


    const forecastArray: WindForecast[] = [];

    for (let i = 0; i < windSpeedArray10m.length; i++) {
      const time = timeArray[i];
      const precipitation = precipitationArray[i];
      const windSpeed10m = windSpeedArray10m[i];
      const windSpeed80m = windSpeedArray80m[i];
      const windSpeed120m = windSpeedArray120m[i];
      const windSpeed180m = windSpeedAray180m[i];
      const windDirection10m = windDirectionArray10m[i];
      const windDirection80m = windDirectionArray80m[i];
      const windDirection120m = windDirectionArray120m[i];
      const windDirection180m = windDirectionArray180m[i];
      const windGust = windGustArray[i];


      const forecast: WindForecast = {
        time: time,
        precipitation: precipitation,
        windspeed_10m: windSpeed10m,
        windspeed_80m: windSpeed80m,
        windspeed_120m: windSpeed120m,
        windspeed_180m: windSpeed180m,
        winddirection_10m: windDirection10m,
        winddirection_80m: windDirection80m,
        winddirection_120m: windDirection120m,
        winddirection_180m: windDirection180m,
      windgusts_10m: windGust
      };

      forecastArray.push(forecast);
    }
    return forecastArray;
  }


}

