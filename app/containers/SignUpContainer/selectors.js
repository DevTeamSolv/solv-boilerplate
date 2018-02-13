import { createSelector } from 'reselect';

/**
 * Direct selector to the signUpContainer state domain
 */
const selectSignUpContainerDomain = (state) => state.get('signUpContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignUpContainer
 */

const makeSelectSignUpContainer = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.toJS()
);

const fName = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.get('fName')
);

const lName = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.get('lName')
);

const email = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.get('email')
);
const ethAddress = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.get('ethAddress')
);

const reffCode = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.get('reffCode')
);

const ethAmount = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.get('ethAmount')
);

const loading = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.get('loading')
);

const signUpSuccess = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.get('signUpSuccess')
);

export {
  fName,
  lName,
  email,
  ethAmount,
  ethAddress,
  reffCode,
  loading,
  signUpSuccess
};
