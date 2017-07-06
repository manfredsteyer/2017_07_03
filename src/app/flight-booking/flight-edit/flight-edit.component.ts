import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Flight } from "app/entities/flight";

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: string;
  showDetails: string;
  flight: Flight;

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });

    this.route.data.subscribe(data => {
      this.flight = data['flight'];
    })
  }

}
