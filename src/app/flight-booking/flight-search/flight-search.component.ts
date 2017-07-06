import { Component, OnInit, ViewChild } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { NgForm } from "@angular/forms";
//               ^^^             ^^^
//                +---------------+---- Manuell importieren!

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: []
})
export class FlightSearchComponent implements OnInit {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;
    basket: object = {
        "3": true,
        "4": false,
        "5": true
    };

    // private http: Http;

    @ViewChild('f')
    f: NgForm;


    constructor(private flightService: FlightService) {
        // this.http = http;
        console.debug('Liebesgrüße aus dem Konstruktor!');
    }

    customError: boolean;

    ngOnInit() {

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

        console.debug('form', this.f);

        this.flightService
            .find(this.from, this.to)
            .subscribe(
                (flight: Array<Flight>) => {
                    this.flights = flight;
                },
                (errResponse) => {
                    console.error('Fehler beim Laden', errResponse);
                }
            );

    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }
}
