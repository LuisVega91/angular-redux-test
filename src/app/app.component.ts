import { OffersService } from './services/offers.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characteristics: any = [];
  prices: any = [];

  constructor(private offersService: OffersService) {

  }

}
