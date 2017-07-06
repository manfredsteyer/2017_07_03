import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BASE_URL } from "app/app.tokens";
import { CityPipe } from "app/shared/pipes/city.pipe";
// import { FlightBookingModule } from "app/flight-booking/flight-booking.module";
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutesModule } from "app/app.routes";
import { BasketComponent } from "app/basket/basket.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    // FlightBookingModule,
    AppRoutesModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    BasketComponent
],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
