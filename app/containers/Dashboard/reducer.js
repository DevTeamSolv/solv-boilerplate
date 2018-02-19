/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_ETH, CHANGE_SOLV, SAVE_ETH_PRICE
} from './constants';

const initialState = fromJS({
  eth: 0,
  solv: 0,
  ethPrice: 10
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ETH:

      var ethPrice = state.get("ethPrice");
      var solv = (action.val * ethPrice) / 0.1;
    // console.log(ethPrice, solv)
      return state.set('eth', action.val).set('solv', solv);

    case CHANGE_SOLV:
      return state.set('solv', action.val);

    case SAVE_ETH_PRICE:
      return state.set('ethPrice', action.val);


    default:
      return state;
  }
}

export default dashboardReducer;
