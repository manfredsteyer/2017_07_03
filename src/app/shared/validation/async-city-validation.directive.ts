
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { Flight } from "app/entities/flight";

import 'rxjs';

@Directive({ 
    selector: 'input[asyncCity]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncCityValidationDirective,
            multi: true
        }
    ]
})
export class AsyncCityValidationDirective implements Validator {

    constructor(private flightService: FlightService) { }

    validate(c: AbstractControl): Observable<object> {
        
        return this
                .flightService
                .find(c.value, '')
                .map( (flights: Flight[]) => {
                    if (flights.length == 0) return { asyncCity: true }
                    return {};
                })
                .catch( (errResp) => {
                    return Observable.of({ asyncCity: { reason: 'no-network' }});
                })

        // return Observable.create((sender: Observer<object>) => {
        //     setTimeout(() => {

        //         if (c.value == 'Graz'
        //             || c.value == 'Hamburg') {
        //                 sender.next({});
        //                 sender.complete();
        //             }
        //         else {
        //             sender.next({
        //                 asyncCity: true
        //             });
        //             sender.complete();
        //         }
        //     }, 400);
        // });        

    }

}