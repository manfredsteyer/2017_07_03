import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Flight } from "app/entities/flight";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ReplaySubject } from "rxjs/ReplaySubject";

@Injectable()
export class FlightEventService {

  constructor() { }

  public flightSelected = new ReplaySubject<Flight>(1);

}
