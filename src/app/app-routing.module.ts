import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './components/insert/insert.component';
import { WindForecastComponent } from './components/wind-forecast/wind-forecast.component';

const routes: Routes = [
  {path: 'search', component: InsertComponent},
  {path:'meteo/:latlng', component: WindForecastComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: '**', redirectTo: '/search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
