
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { ErrorComponent } from "app/error/error.component";
import { BasketComponent } from "app/basket/basket.component";

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
        path: 'basket',
        component: BasketComponent,
        outlet: 'aux'
    },
    {
        path: '**',
        component: ErrorComponent
    }
];

export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES);
