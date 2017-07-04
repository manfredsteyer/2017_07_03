
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from "app/entities/flight";

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit {
    constructor() { }

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    ngOnInit() { }

    select() {
        this.selected = true;
        this.selectedChange.next(true);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(false);
    }
}