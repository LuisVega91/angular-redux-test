import { UpdateData, ChangeOffer } from './../../redux/offer.actions';
import { AppState } from './../../redux/offer.reducers';
import { OffersService } from './../../services/offers.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offers: any = [];
  slectedOffer: any = null;

  offerId: any = null;
  offerName: any = null;

  constructor(
    private offersService: OffersService,
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.store.subscribe( ({offer: state}:any) => {
      this.offers = state?.offers;
      this.offerId = state?.currentOffer?.versions?.[0]?.id;
      this.offerName = state?.currentOffer?.versions?.[0]?.name;
    });
    this.offersService.get().subscribe((payload:[]) => {
      const action = new UpdateData(payload);
      this.store.dispatch(action);
    });
  }

  update() {
    const action = new ChangeOffer(this.slectedOffer);
    this.store.dispatch(action);
  }

}
