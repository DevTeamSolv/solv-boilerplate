/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_IN, SIGN_IN_RES, CHANGE_LOADER, EMAIL, RESET
} from './constants';

const initialState = fromJS({
  email: '',
  loading: false,
  signInSuccess: ""
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EMAIL:
      return state.set('email', action.val);

    case CHANGE_LOADER:
      return state.set('loading', action.val);

    case SIGN_IN_RES:
      return state.set('signInSuccess', action.val).set('loading', action.loading);

    case RESET:
      state = initialState;
      return state;

    default:
      return state;
  }
}

export default loginReducer;
