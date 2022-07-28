import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './components/insert/insert.component';
import { FormsModule } from '@angular/forms';
import { WindForecastComponent } from './components/wind-forecast/wind-forecast.component';
import { UnitPipe } from './components/pipes/unit-pipe/unit.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArrowDirectionPipe } from './components/pipes/arrow-direction/arrow-direction.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    WindForecastComponent,
    UnitPipe,
    HeaderComponent,
    FooterComponent,
    ArrowDirectionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
