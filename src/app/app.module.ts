import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {trigger, state, style } from '@angular/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './components/insert/insert.component';
import { FormsModule } from '@angular/forms';
import { WindForecastComponent } from './components/wind-forecast/wind-forecast.component';
import { UnitPipe } from './components/pipes/unit-pipe/unit.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArrowDirectionPipe } from './components/pipes/arrow-direction/arrow-direction.pipe';
import { IntensityPipe } from './components/pipes/wind-intensity/intensity.pipe';
import { CustomDatePipe } from './components/pipes/custom-date/custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    WindForecastComponent,
    UnitPipe,
    HeaderComponent,
    FooterComponent,
    ArrowDirectionPipe,
    IntensityPipe,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
