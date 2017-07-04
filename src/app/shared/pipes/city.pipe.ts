

import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from "app/entities/flight";

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {
    transform(value: string, fmt: string, lang: string): string {        

        let long, short;

        switch(value) {

            case 'Hamburg':
                long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
                short = 'HAM';
            break;
            case 'Graz':
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
            break;
            case 'Münster':
                long = 'Flughafen Müster-Osnabrück';
                short = 'FMO';
            break;
            case 'Hannover':
                long = 'Aiport Hannover';
                short = 'HAJ';
            break;
            default:
                long = short = 'ROM';

        }

        if (fmt == 'long') return long;
        return short;

    }
}