import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */


const makeSelectEmail = () => createSelector(
  selectLoginDomain,
  (substate) => substate.get('email')
);

const loading = () => createSelector(
  selectLoginDomain,
  (substate) => substate.get('loading')
);

const signInSuccess = () => createSelector(
  selectLoginDomain,
  (substate) => substate.get('signInSuccess')
);
export {
  makeSelectEmail,
  signInSuccess,
  loading
};
