import { CHANGEOFFER, actions, UPDATEDATA } from './offer.actions';

export function offerReducer(state: any = { currentOffer: {}, offers: [] }, action: actions) {

  switch (action.type) {
    case CHANGEOFFER:
      return {
        currentOffer: state.offers.find((el: any) => el?.versions?.[0]?.id === action.payload),
        offers: state.offers
      };

    case UPDATEDATA:
      return {
        currentOffer: {},
        offers: action.payload
      };

    default:
      return state;
  }

}
