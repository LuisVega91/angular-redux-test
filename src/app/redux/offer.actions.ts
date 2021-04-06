import { Action } from '@ngrx/store';

export const CHANGEOFFER = '[Offer] ChangeOffer';
export const UPDATEDATA = '[Offer] UpdateData';



export class ChangeOffer implements Action {
  readonly type = CHANGEOFFER;
  constructor(public payload: string) { }
}

export class UpdateData implements Action {
  readonly type = UPDATEDATA;
  constructor(public payload: []) { }
}


export type actions = ChangeOffer| UpdateData;
