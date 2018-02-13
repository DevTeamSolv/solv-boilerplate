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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {email, ethAddress, ethAmount, fName, lName, reffCode, loading, signUpSuccess} from './selectors';
import {changeAmount, changeCode, changeEmail, changeEthAddress, changeFirstName, changeLastName, signUp, reset} from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button } from 'antd';
import "antd/lib/button/style/index.css";
// import "antd/lib/icon/style/css.js";
import * as EmailValidator from 'email-validator';
import $ from "jquery"
import {Link} from 'react-router-dom';
import SignUpSuccess from "../../components/SignUpSuccess/Loadable";


// require("../../images/wallpaper.png")
export class SignUpContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      fName: true,
      lName: true,
      email: true,
      ethAddress: true,
      ethAmount: true,
      refCode: true,
      checkBox: false,
      checked: true,
    }
  }
  handleCheckBox(evt){
    this.setState({
      checkBox: evt.target.checked,
      checked: true
    })
  }
  componentWillUnmount(){
    this.props.reset();
  }
  componentDidMount(){
    // this.props.signUp();
    var h = $(document).height(); // returns height of HTML document
    var w = $(window).height(); // returns height of HTML document
    console.log(h, w)
    $(".sign-up").css('min-height', w+"px")
    // $("#app").css('background-image', "url(../../images/wallpaper.png)")
  }
  route(){
    this.props.history.push('dashboard')
  }
  handleFocus(evt){
    switch(evt) {
      case "fname":
        this.setState({
          fName: true
        })
            break;

      case "lname":
        this.setState({
          lName: true
        })
            break;

      case "email":
        this.setState({
          email: true
        })
            break;

      case "ethAddress":
        this.setState({
          ethAddress: true
        })
            break;

      case "ethAmount":
        this.setState({
          ethAmount: true
        })
            break;
    }
  }
  login(){
    if (!this.props.fName) {
      this.setState({
        fName: false
      })
    }
    if (!this.props.lName) {
      this.setState({
        lName: false
      })
    }
    if (!EmailValidator.validate(this.props.email)) {
      this.setState({
        email: false
      })
    }
    if (!this.props.ethAddress) {
      this.setState({
        ethAddress: false
      })
    }
    if (!this.props.ethAmount) {
      this.setState({
        ethAmount: false
      })
    }
    if (!this.state.checkBox) {
      this.setState({
        checked: false
      })
    }
    console.log("outside signup")
    if(this.props.fName && this.props.lName && this.props.email && this.props.ethAddress && this.props.ethAmount && this.state.checkBox ) {
      console.log("inside signup")
      this.props.signUp();
    }
  }
  render() {
    console.log(this.props.signUpSuccess)
    return (
      <div className="sign-up">
        { this.props.signUpSuccess !== "registered" &&
          <div>
            <div className="container">
              <img src={require("../../images/logo-text2.png")}/>
              <div className="form">
                <div className="row-1">
                  <div className={this.state.fName ? "my-row my-row1" : "my-row my-row1 error"}>
                    <div className="my-label"><p>First Name <span> *required</span></p></div>
                    <div className="input">
                      <input onFocus={this.handleFocus.bind(this, "fname")} onChange={this.props.changeFirstName} value={this.props.fName} placeholder="Enter your First name" />
                    </div>
                  </div>
                  <div className={this.state.lName ? "my-row my-row2" : "my-row my-row2 error"}>
                    <div className="my-label"><p>Last Name <span> *required</span></p></div>
                    <div className="input">
                      <input onFocus={this.handleFocus.bind(this, "lname")} onChange={this.props.changeLastName}  value={this.props.lName} placeholder="Enter your Last name" />
                    </div>
                  </div>
                </div>
                <div className={(this.state.email && ( !this.props.signUpSuccess || this.props.signUpSuccess === "registered" )) ? "my-row" : "my-row error"}>
                  <div className="my-label"><p>Email {!this.state.email && <span> *Invalid Email Address</span>} {this.state.email && this.props.signUpSuccess && <b><span className="already"> **Already registered</span></b>}</p></div>
                  <div className="input">
                    <input onFocus={this.handleFocus.bind(this, "email")}  onChange={this.props.changeEmail} value={this.props.email} placeholder="Enter your Email address" />
                  </div>
                </div>
                <div className={this.state.ethAddress ? "my-row" : "my-row error"}>
                  <div className="my-label"><p>Ethereum Address <span> *required</span></p></div>
                  <div className="input">
                    <input onFocus={this.handleFocus.bind(this, "ethAddress")}  onChange={this.props.changeEthAddress} value={this.props.ethAddress} placeholder="Enter your ETH address" />
                  </div>
                </div>
                <div className={this.state.ethAmount ? "my-row" : "my-row error"}>
                  <div className="my-label"><p className="eth-amount">How much ETH you would like to participate with? <span> *required</span></p></div>
                  <div className="input">
                    <input onFocus={this.handleFocus.bind(this, "ethAmount")}  onChange={this.props.changeAmount} value={this.props.ethAmount} type="number" placeholder="Enter ETH amount" min={0}/>
                  </div>
                </div>
                <div className={this.state.refCode ? "my-row" : "my-row error"}>
                  <div className="my-label"><p>Referral Code <span className="opactiy-one"> *optional</span></p></div>
                  <div className="input">
                    <input   onChange={this.props.changeCode} value={this.props.reffCode} placeholder="Enter referral code"/>
                  </div>
                </div>
                <div className={this.state.checked ? "last-row" : "last-row error"}>
                  <div className="checkbox">
                    <input value={this.state.checkBox} onChange={this.handleCheckBox.bind(this)} type="checkbox"/><p>I understand to follow all rules and regulations within your country, state and territory and have read the whitepaper thoroughly. </p>
                  </div>
                  <Button type="primary" loading={this.props.loading} onClick={this.login.bind(this)}>
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
            <div className="bottom-last-row">
              <div className="login-line">
                <p><Link to="signin">Login</Link> if you already registered.</p>
              </div>
            </div>
          </div>
        }

        {this.props.signUpSuccess === "registered" &&
          <SignUpSuccess />
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  reffCode: reffCode(),
  fName: fName(),
  lName: lName(),
  ethAddress: ethAddress(),
  ethAmount: ethAmount(),
  email: email(),
  loading: loading(),
  signUpSuccess: signUpSuccess(),
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
    reset: (evt) => dispatch(reset()),
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
