import { environment } from './../environments/environment';
import { PricesComponent } from './components/prices/prices.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { OfferComponent } from './components/offer/offer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { offerReducer } from './redux/offer.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({offer: offerReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
