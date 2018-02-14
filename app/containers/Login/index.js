/**
 *
 * Login
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
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import "./css/style.css";
import { Button } from 'antd';
import {changeEmail, signIn, reset} from './actions';
import {makeSelectEmail, loading, signInSuccess, fName} from './selectors';
import {Link} from 'react-router-dom';
import $ from "jquery";
import SignUpSuccess from "../../components/SignUpSuccess/Loadable";

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      email: true,
    }
  }

  handleFocus(evt){
    switch(evt) {
      case "email":
        this.setState({
          email: true
        })
        break;

        break;
    }
  }

  componentDidMount(){
    // this.props.signUp();
    var h = $(document).height(); // returns height of HTML document
    var w = $(window).height(); // returns height of HTML document
    console.log(h, w)
    $(".login").css('min-height', w+"px")
  }
  render() {
    console.log(this.props.fName)
    return (
      <div className="login">
        {this.props.signInSuccess !== "success" &&
          <div>
          <div className="container">
            <img src={require("../../images/logo-text2.png")}/>
            <div className="form">
              <div className={this.state.email && this.props.signInSuccess !== "invalid" ? "my-row" : "my-row error"}>
                <div className="my-label"><p>ETH Address <span> *Invalid ETH Address</span> </p></div>
                <div className="input">
                  <input onFocus={this.handleFocus.bind(this, "email")} value={this.props.email} onChange={this.props.changeEmail} placeholder="Enter your ETH address" />
                </div>
              </div>

              <div className="last-row">
                <Button type="primary" loading={this.props.loading} onClick={this.props.signIn}>
                  Sign In
                </Button>
              </div>
            </div>
          </div>
          <div className="bottom-last-row">
            <div className="login-line">
              <p><Link to="signup">Sign Up</Link> if you are not registered yet.</p>
            </div>
          </div>
        </div>}

        {this.props.signInSuccess === "success" &&
            <SignUpSuccess signup={false} fName={this.props.fName}/>
        }

      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  loading: loading(),
  fName: fName(),
  signInSuccess: signInSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    signIn: () => dispatch(signIn()),
    reset: () => dispatch(reset())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
