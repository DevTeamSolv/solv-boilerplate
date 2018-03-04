/**
*
* Maintainence
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Link } from 'react-router-dom';


class Maintainence extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="maintain">
        <div className="container">
          <div className="buttons">
            <div className="row">
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Log In</Link>
            </div>
            <div className="row">
              <a target="_blank" className="link" href="https://www.facebook.com/solutiontoken/"><i className="fab fa-3x fa-facebook-square"></i></a>
              <a target="_blank" className="link" href="https://t.me/solutiontoken"><i className="fab fa-3x fa-telegram"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Maintainence.propTypes = {

};

export default Maintainence;
