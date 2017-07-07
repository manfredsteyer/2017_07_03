import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { FlightCardComponent } from "app/flight-booking/flight-search/flight-card.component";
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingRouterModule } from "app/flight-booking/flight-booking.routes";
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from "app/flight-booking/flight-booking.component";
import { FlightEditResolver } from "app/flight-booking/flight-edit/flight-edit.resolver";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { AuthModule } from "app/auth/auth.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        FlightBookingRouterModule,
        AuthModule // Ohne forRoot(), forRoot() nur für Root-Module (AppModule)
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        PassengerSearchComponent,
        FlightBookingComponent,
        FlightEditComponent
],
    providers: [
      FlightEditResolver,
      FlightService
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }
