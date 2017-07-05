
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

@Directive({ 
    selector: 'input[city]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidationDirective,
            multi: true
        }
    ]
})
export class CityValidationDirective implements Validator {

    constructor() { }

    @Input() city: string;

    validate(c: AbstractControl): object {
        
        let currentCity = c.value;
        let allowedCities = this.city.split(',');

        if (allowedCities.indexOf(currentCity) > -1) {
            return {};
        }

        return {
            city: {
                actual: currentCity,
                allowed: allowedCities,
                reason: 42,
                tryAgain: '2y'
            }
        }

    }

}