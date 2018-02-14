/**
*
* SignUpSuccess
*
*/

import React from 'react';
// import styled from 'styled-components';
import CountdownTimer from "../../components/CountdownTimer/Loadable";
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import moment from "moment";
class SignUpSuccess extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="container success">
          <div className="success-sign-up">
            <img src={require("../../images/logo-text2.png")}/>
            {this.props.signup && <h3>
              Sign Up Successful!
            </h3>}
            <h3>
              Hi {this.props.fName}!
            </h3>
            <h4>
              Presale starts on 20<sup>th</sup> March
            </h4>
            {/*<Button type="primary">*/}
              {/*Proceed to Dashboard!*/}
            {/*</Button>*/}
            <CountdownTimer endDate={moment('20/3/2018 12:00:00', 'DD/MM/YYYY hh:mm:ss')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpSuccess;
