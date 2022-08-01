import { Time } from "@angular/common";

export interface WindForecast {
  time: string | number | Date;
  precipitation: number;
  windspeed_10m: number;
  windspeed_80m: number;
  windspeed_120m: number;
  windspeed_180m: number;
  winddirection_10m: number;
  winddirection_80m: number;
  winddirection_120m: number;
  winddirection_180m: number;
  windgusts_10m: number;
}
