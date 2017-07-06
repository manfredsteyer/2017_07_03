import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { FlightCardComponent } from "app/flight-booking/flight-search/flight-card.component";
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingRouterModule } from "app/flight-booking/flight-booking.routes";
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        PassengerSearchComponent,
    FlightEditComponent
],
    providers: [],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }
