
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Flight } from "app/entities/flight";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges {

    constructor() { 
        console.debug('ctor', this.selected, this.item);
    }



    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    ngOnInit() { 
        console.debug('init', this.selected, this.item);
        // this.selectedChange.next(true);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.debug('changes', this.selected, this.item);

        if (changes['selected']) {
            console.debug('\tselected has changed.');
        }
        if (changes['item']) {
            console.debug('\titem has changed.');
        }
    }

    select() {
        this.selected = true;
        this.selectedChange.next(true);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(false);
    }
}