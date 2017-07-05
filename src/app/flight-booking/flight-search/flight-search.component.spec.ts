
import { TestBed, async } from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { FlightBookingModule } from "app/flight-booking/flight-booking.module";
import { FlightCardComponent } from "app/flight-booking/flight-search/flight-card.component";
import { BASE_URL } from "app/app.tokens";

import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { Observable } from "rxjs/Observable";
import { Flight } from "app/entities/flight";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

import 'rxjs';

let flightServiceMock = {
    find(from: string, to:string): Observable<Flight[]> {
        return Observable.of([
            { id: 4711, from: 'Graz', to: 'Flagranti', date: 'jetzt'},
            { id: 4712, from: 'Graz', to: 'Kognito', date: 'jetzt'},
            { id: 4713, from: 'Graz', to: 'Mallorca', date: 'jetzt'},
        ])
    }
}

describe('FlightSearchComponent', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                FlightBookingModule
            ],
            declarations: [
            ],
            providers: [
                { provide: BASE_URL, useValue: 'http://test.angular.at/api' }
            ]
        }).compileComponents();

        TestBed.overrideComponent(FlightSearchComponent, {
            set: {
                providers: [
                    {
                        provide: FlightService,
                        useValue: flightServiceMock
                    }
                ]
            }
        }).compileComponents();

    }));

    it('should have no loaded flights initially', () => {
        let fixture = TestBed.createComponent(FlightSearchComponent);
        let comp = fixture.componentInstance;
        expect(comp.flights.length).toBe(0);
    });

    it('should not search for flights without from and to', () => {
        let fixture = TestBed.createComponent(FlightSearchComponent);
        let comp = fixture.componentInstance;

        comp.from = '';
        comp.to = '';
        comp.search();

        expect(comp.flights.length).toBe(0);

    });

    it('should search for flights with from and to', () => {
        let fixture = TestBed.createComponent(FlightSearchComponent);
        let comp = fixture.componentInstance;

        comp.from = 'Hamburg';
        comp.to = 'Graz';
        comp.search();

        expect(comp.flights.length).toBe(3);
    });


});