

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basket',
  template: `
    <div class="card">
      <h2>Your Basket</h2>
      <ul>
        <li>Hamburg - Graz</li>
        <li>Hamburg - Mallorca</li>
        <li>Mallorca - Graz</li>
      </ul>
    </div>
  `
})
export class BasketComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
