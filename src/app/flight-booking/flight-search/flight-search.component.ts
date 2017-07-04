import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
//               ^^^             ^^^
//                +---------------+---- Manuell importieren!

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: [FlightService] 
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

    constructor(private flightService: FlightService) { 
        // this.http = http;
        console.debug('Liebesgrüße aus dem Konstruktor!');
    }

    ngOnInit() { }

    search(): void {
        // http

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