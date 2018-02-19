/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectEth, makeSelectEthPrice, makeSelectSolv } from './selectors';
import { changeSolv, changeEth, getEth } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleCopy(){

  }

  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="container">
            <img src={require("../../images/logo-text2.png")}/>
            <h3>Hi Hassan, Welcome to Solution Token.</h3>
            <p>Send Eth to this Contract Address.<br/> <b>Don't</b> send ETH from any exchange, send only from any ETH wallet.</p>
            <div className="address-input">
              <input className="address" value="eth address"/>
              <div className="icon" onClick={this.handleCopy.bind(this)}><i className="far fa-2x fa-copy"></i></div>
            </div>
            <div className="calculator">
              <p>I want to participate with </p>
              <input onChange={this.props.changeEth} min={0} max={100} className="calc" type="number" value={this.props.makeSelectEth}/>
              <p> ETH to buy </p>
              <input onChange={this.props.changeSolv} className="calc2" value={this.props.makeSelectSolv}/>
              <p> SOLV Token.</p>
              {/*<div className="left-side">*/}
                {/**/}
              {/*</div>*/}
              {/*<div className="right-side"></div>*/}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  makeSelectEth: makeSelectEth(),
  makeSelectEthPrice: makeSelectEthPrice(),
  makeSelectSolv: makeSelectSolv(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeEth: (evt) => dispatch(changeEth(evt.target.value)),
    changeSolv: (evt) => dispatch(changeSolv(evt.target.value)),
    getEth: () => dispatch(getEth()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Dashboard);
