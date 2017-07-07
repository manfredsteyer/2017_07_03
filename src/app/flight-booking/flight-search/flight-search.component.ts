import { Component, OnInit, ViewChild } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { NgForm } from "@angular/forms";
import { FlightEventService } from "app/eventing/flight-event-service";
//               ^^^             ^^^
//                +---------------+---- Manuell importieren!

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: []
})
export class FlightSearchComponent implements OnInit {

    from: string = 'Hamburg';
    to: string;

    selectedFlight: Flight;

    airports: Array<string> = [];

    basket: object = {
        "3": true,
        "4": false,
        "5": true
    };

    // private http: Http;

    @ViewChild('f')
    f: NgForm;

    // flights: Array<Flight> = [];
    get flights(): Flight[] {
      return this.flightService.flights;
    }


    constructor(
      private flightService: FlightService,
      private flightEventService: FlightEventService
      ) {
        // this.http = http;
        console.debug('Liebesgrüße aus dem Konstruktor!');
    }

    customError: boolean;






    ngOnInit() {

        this.flightService.findAirports().subscribe(
          airports => this.airports = airports,
          err => console.error(err)
        );








        this.f.valueChanges.subscribe(v => {

            if (v.from == 'Zürich') {
                this.customError = true;
                // this.f.controls['from'].setErrors({customError: 'Zürich ist vorübergehend gesperrt!'});
            }

        });

    }

    search(): void {
        // http

        // this.f.controls['from'].value;
        // this.f.controls['from'].valid;
        // this.f.controls['from'].pending;
        // this.f.controls['from'].setErrors({ customError: true });
        // if (this.f.controls['from'].value == 'Zürich') return;

        if (!this.from || !this.to) return;
        this.flightService.find(this.from, this.to);
    }

    select(f: Flight, selected: boolean): void {
        this.basket[f.id] = selected;
        this.flightEventService.flightSelected.next(f);
    }
}
