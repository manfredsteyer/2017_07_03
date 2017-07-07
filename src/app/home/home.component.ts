import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  get userName(): string {
    return this.authService.userName;
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

}
