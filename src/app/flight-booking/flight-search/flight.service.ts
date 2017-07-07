import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Flight } from "app/entities/flight";
import { BASE_URL } from "app/app.tokens";
import { AuthService } from "app/shared/auth/auth.service";

@Injectable()
export class FlightService {

    constructor(
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string,
        private authSerivce: AuthService) {
        console.debug('Liebesgrüße aus dem Konstruktor!');
    }

    flights: Flight[] = [];


    findAirports(): Observable<string[]> {
        let url = this.baseUrl + '/airport';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(url, { headers })
                .map(resp => resp.json());

    }




    findById(id: string): Observable<Flight> {
        let url = this.baseUrl + '/flight';

        let search = new URLSearchParams();
        search.set('id', id);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(url, { search, headers })
                .map(resp => resp.json());

    }

    save(flight: Flight): Observable<Flight> {
        let url = this.baseUrl + '/flight';

        let search = new URLSearchParams();

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .post(url, flight, { search, headers })
                .map(resp => resp.json());

    }

    find(from: string, to: string): void {

        // Sichere Variante
        // let url = this.baseUrl + '/secureflight/byRoute';
        let url = this.baseUrl + '/flight';

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        // Bearer token
        // headers.set('Authorization', this.authSerivce.authorizationHeader);


        // Alternative: BASIC-Auth
        // headers.set('Authorization', 'Basic ' + btoa('max:geheim'));

        let x = this
              .http
              .get(url, { search, headers })
              .map(resp => resp.json())
              .subscribe(
                flights => this.flights = flights,
                err => console.error(err)
              );

        // TODO: Catch-Block: Reagieren auf 401, 403
    }


    findAndReturn(from: string, to: string) {

        let url = this.baseUrl + '/flight';

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Authorization', this.authSerivce.authorizationHeader);
        // Bearer token

        // Alternative: BASIC-Auth
        // headers.set('Authorization', 'Basic ' + btoa('max:geheim'));

        return this
              .http
              .get(url, { search, headers })
              .map(resp => resp.json());

        // TODO: Catch-Block: Reagieren auf 401, 403
    }


}
