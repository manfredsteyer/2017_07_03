import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { ErrorComponent } from "app/error/error.component";
import { FlightEditComponent } from "app/flight-booking/flight-edit/flight-edit.component";
import { FlightBookingComponent } from "app/flight-booking/flight-booking.component";
import { AuthGuard } from "app/shared/auth/auth.guard";
import { FlightEditResolver } from "app/flight-booking/flight-edit/flight-edit.resolver";

const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-booking',
        component: FlightBookingComponent,
        canActivate: [AuthGuard],
        children: [
          {
              path: 'flight-search',
              component: FlightSearchComponent
          },
          {
              path: 'passenger-search',
              component: PassengerSearchComponent
          },
          {
              path: 'flight-edit/:id',
              component: FlightEditComponent,
              resolve: {
                flight: FlightEditResolver
              }
          }
        ]
    }

];

export const FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
