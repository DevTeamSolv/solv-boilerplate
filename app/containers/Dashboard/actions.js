/*
 *
 * Dashboard actions
 *
 */

import {
  CHANGE_ETH, CHANGE_SOLV, GET_ETH_PRICE, SAVE_ETH_PRICE
} from './constants';

export function changeEth(val) {
  return {
    type: CHANGE_ETH,
    val
  };
}

export function changeSolv(val) {
  return {
    type: CHANGE_SOLV,
    val
  };
}

export function getEth() {
  return {
    type: GET_ETH_PRICE,
  };
}

export function saveEth(val) {
  return {
    type: SAVE_ETH_PRICE,
  };
}
