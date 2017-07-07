import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Router } from "@angular/router";
import { FlightEventService } from "app/eventing/flight-event-service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  f: Flight;
  sub: Subscription;

  constructor(
    private router: Router,
    private flightEventService: FlightEventService
    ) {

      this.sub = flightEventService.flightSelected.subscribe(f => {
        this.f = f;
      });

    }

  close() {
    this.router.navigate([{outlets: {aux: null}}]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
