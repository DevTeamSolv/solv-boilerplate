import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboard state domain
 */
const selectDashboardDomain = (state) => state.get('dashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Dashboard
 */

const makeSelectDashboard = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.toJS()
);

const makeSelectEth = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('eth')
);

const makeSelectSolv = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('solv')
);

const makeSelectEthPrice = () => createSelector(
  selectDashboardDomain,
  (substate) => substate.get('ethPrice')
);

export {
  makeSelectEthPrice,
  makeSelectSolv,
  makeSelectEth,
  selectDashboardDomain,
};
