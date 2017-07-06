import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Flight } from "app/entities/flight";
import { Observable } from "rxjs/Observable";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

@Injectable()
export class FlightEditResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> {
      let id = route.params['id'];
      return this.flightService.findById(id).delay(7000);
    }




}
