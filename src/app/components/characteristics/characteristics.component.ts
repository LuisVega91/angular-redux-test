import { AppState } from './../../redux/offer.reducers';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  characteristics: any = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(({offer: {currentOffer: offer}}:any) => {
      this.characteristics = offer?.versions?.[0]?.characteristics
    });
  }

}
