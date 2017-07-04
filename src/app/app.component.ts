import { Component } from '@angular/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo Welt!';  

  toEN(): void {
    	this.title = 'Hello World!';
  }

  toDE(): void {
    	this.title = 'Hallo Welt!';
  }

}
