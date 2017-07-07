import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/auth/auth.service";

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css']
})
export class PassengerSearchComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  get userName() {
    return this.authService.userName;
  }

}
