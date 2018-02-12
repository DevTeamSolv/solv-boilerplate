/**
 *
 * SignUpContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import "./css/style.css";
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {email, ethAddress, ethAmount, fName, lName, reffCode} from './selectors';
import {changeAmount, changeCode, changeEmail, changeEthAddress, changeFirstName, changeLastName, signUp} from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button } from 'antd';
import "antd/lib/button/style/index.css";
import "antd/lib/icon/style/css.js";

export class SignUpContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    this.props.signUp();
  }
  render() {
    return (
      <div className="sign-up">
        <div className="container">
          <img src={require("../../images/logo-text2.png")}/>
          <div className="form">
            <div className="row-1">
              <div className="my-row my-row1">
                <div className="my-label"><p>First Name</p></div>
                <div className="input">
                  <input onChange={this.props.changeFirstName} value={this.props.fName} placeholder="Enter your First name" />
                </div>
              </div>
              <div className="my-row my-row2">
                <div className="my-label"><p>Last Name</p></div>
                <div className="input">
                  <input onChange={this.props.changeLastName}  value={this.props.lName} placeholder="Enter your Last name" />
                </div>
              </div>
            </div>
              <div className="my-row">
                <div className="my-label"><p>Email</p></div>
                <div className="input">
                  <input  onChange={this.props.changeEmail} value={this.props.email} placeholder="Enter your Email address" />
                </div>
              </div>
              <div className="my-row">
                <div className="my-label"><p>Ethereum Address</p></div>
                <div className="input">
                  <input  onChange={this.props.changeEthAddress} value={this.props.ethAddress} placeholder="Enter your ETH address" />
                </div>
              </div>
              <div className="my-row">
                <div className="my-label"><p>How much ETH you would like to participate with?</p></div>
                <div className="input">
                  <input  onChange={this.props.changeAmount} value={this.props.ethAmount} type="number" placeholder="Enter ETH amount" min={0}/>
                </div>
              </div>
            <div className="my-row">
              <div className="my-label"><p>Referral Code</p></div>
              <div className="input">
                <input  onChange={this.props.changeCode} value={this.props.reffCode} placeholder="Enter referral code"/>
              </div>
            </div>
              <div className="last-row">
                <div className="checkbox">
                  <input type="checkbox"/><p>Disclaimer bellow should be you understand to follow by rules and regulations within your country, state and territory and have read the whitepaper thoroughly. </p>
                </div>
                <Button type="primary" onClick={this.props.signUp}>
                  Sign Up
                </Button>
              </div>
          </div>
        </div>
        <div className="bottom-last-row">
          <div className="login">
            <p><a>Login</a> if you already registered.</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  email: email(),
  reffCode: reffCode(),
  fName: fName(),
  lName: lName(),
  ethAddress: ethAddress(),
  ethAmount: ethAmount()
});

function mapDispatchToProps(dispatch) {
  return {
    changeAmount: (evt) => dispatch(changeAmount(evt.target.value)),
    changeCode: (evt) => dispatch(changeCode(evt.target.value)),
    changeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    changeEthAddress: (evt) => dispatch(changeEthAddress(evt.target.value)),
    changeFirstName: (evt) => dispatch(changeFirstName(evt.target.value)),
    changeLastName: (evt) => dispatch(changeLastName(evt.target.value)),
    signUp: (evt) => dispatch(signUp()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signUpContainer', reducer });
const withSaga = injectSaga({ key: 'signUpContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpContainer);
