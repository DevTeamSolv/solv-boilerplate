/*
 *
 * Login actions
 *
 */

import {
  EMAIL, CHANGE_LOADER, RESET, SIGN_IN_RES, SIGN_IN
} from './constants';

export function changeEmail(val) {
  return {
    type: EMAIL,
    val
  };
}

export function signIn() {
  console.log("calling")
  return {
    type: SIGN_IN,
  };
}
export function changeLoader(val) {
  return {
    type: CHANGE_LOADER,
    val
  };
}
export function signInResp(val, loading, fName) {
  return {
    type: SIGN_IN_RES,
    val,
    loading,
    fName
  };
}
export function reset() {
  return {
    type: RESET,
  };
}

