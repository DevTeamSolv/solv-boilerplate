/*
 *
 * SignUpContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REFF_CODE, FIRST_NAME, LAST_NAME, ETH,EMAIL,AMOUNT
} from './constants';

const initialState = fromJS({
  fName: '',
  lName: '',
  ethAddress: '',
  email: '',
  ethAmount: '',
  reffCode: '',
});

function signUpContainerReducer(state = initialState, action) {
  switch (action.type) {
    case FIRST_NAME:
      return state.set('fName', action.val);

    case LAST_NAME:
      return state.set('lName', action.val);

    case EMAIL:
      return state.set('email', action.val);

    case ETH:
      return state.set('ethAddress', action.val);

    case AMOUNT:
      return state.set('ethAmount', action.val);

    case REFF_CODE:
      return state.set('reffCode', action.val);

    default:
      return state;
  }
}

export default signUpContainerReducer;
