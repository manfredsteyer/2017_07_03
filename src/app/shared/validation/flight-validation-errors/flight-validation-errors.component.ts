

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'flight-validation-errors',
    templateUrl: './flight-validation-errors.component.html'
})
export class FlightValidationErrorsComponent implements OnInit {
    constructor() { }

    @Input() errors: object;

    ngOnInit() { }
}