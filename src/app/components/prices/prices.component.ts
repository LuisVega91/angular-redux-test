import { AppState } from './../../redux/offer.reducers';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  prices: any = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(({ offer: { currentOffer: offer } }: any) => {
      this.prices = offer?.versions?.[0]?.productOfferingPrices
    });
  }

}
