import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from "@angular/router";

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo Welt!';

  loading: boolean = false;

  constructor(private router: Router) {

    router.events.subscribe(e => {

      if (e instanceof NavigationStart) {
        console.debug('NavigationStart');
        this.loading = true;
      }
      else if (
        e instanceof  NavigationCancel
        || e instanceof NavigationEnd
        || e instanceof NavigationError
      ) {
        console.debug('NavigationEnd & Co.');
        this.loading = false;
      }
    })

  }

  toEN(): void {
    	this.title = 'Hello World!';
  }

  toDE(): void {
    	this.title = 'Hallo Welt!';
  }

}
