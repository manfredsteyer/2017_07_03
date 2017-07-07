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
import { SharedModule } from "app/shared/shared.module";
import { AuthModule } from "app/auth/auth.module";
import { OAuthModule } from "angular-oauth2-oidc";
import { FlightEventService } from "app/eventing/flight-event-service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    // FlightBookingModule,
    AppRoutesModule,
    SharedModule,
    AuthModule.forRoot(),
    OAuthModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    BasketComponent
],
  providers: [
    FlightEventService,
    { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
