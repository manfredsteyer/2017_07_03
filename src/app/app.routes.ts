
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { ErrorComponent } from "app/error/error.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES);