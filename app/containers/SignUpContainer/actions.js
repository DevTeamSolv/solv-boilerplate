/*
 *
 * SignUpContainer actions
 *
 */

import {
  FIRST_NAME,REFF_CODE,LAST_NAME,EMAIL,ETH,AMOUNT,SIGN_UP, CHANGE_LOADER, SIGN_UP_RES, RESET
} from './constants';

export function changeFirstName(val) {
  return {
    type: FIRST_NAME,
    val
  };
}
export function changeLastName(val) {
  return {
    type: LAST_NAME,
    val
  };
}
export function changeEmail(val) {
  return {
    type: EMAIL,
    val
  };
}
export function changeEthAddress(val) {
  return {
    type: ETH,
    val
  };
}
export function changeAmount(val) {
  return {
    type: AMOUNT,
    val
  };
}
export function changeCode(val) {
  return {
    type: REFF_CODE,
    val
  };
}
export function signUp() {
  console.log("calling")
  return {
    type: SIGN_UP,
  };
}
export function changeLoader(val) {
  return {
    type: CHANGE_LOADER,
    val
  };
}
export function signUpResp(val, loading) {
  return {
    type: SIGN_UP_RES,
    val,
    loading
  };
}
export function reset() {
  return {
    type: RESET,
  };
}

