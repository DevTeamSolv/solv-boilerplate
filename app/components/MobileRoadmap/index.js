/**
*
* MobileRoadmap
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from '../RoadMap/messages';

class MobileRoadmap extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {
      currentBlock: 0
    }
  }
  componentDidMount(){
  }
  openMonth(monthName, evt) {
  }
  render() {
    return (
      <div className="mobile-roadmap">
        <div className="roadmap">
          <h3>ROADMAP</h3>
          <p className="mid-dot-top">&middot;</p>
          <div className="inner-container">
            <div className="right-side">
              <div className="box">
                <div className="hr-box">
                  <hr/>
                </div>
                <div className="inner-box active">
                  <div className="image">
                    <img src={require("../../images/gifs/solv_logo_animated.gif")}/>
                  </div>
                  <div className="data">
                    <h3><FormattedMessage {...messages.q12018head}/></h3>
                    <p><FormattedMessage {...messages.q12018title}/></p>
                    <ul>
                      <li><FormattedMessage {...messages.q12018l1}/></li>
                      <li><FormattedMessage {...messages.q12018l2}/></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box">

                <div className="hr-box">
                  <hr/>
                </div>
                <div className="inner-box">
                  <div className="image">
                    <img src={require("../../images/gifs/Ethereum-render.gif")}/>
                  </div>
                  <div className="data">
                    <h3><FormattedMessage {...messages.q22018head}/></h3>
                    <p><FormattedMessage {...messages.q22018title}/></p>
                    <ul>
                      <li><FormattedMessage {...messages.q22018l1}/></li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="box">
                <div className="hr-box">
                  <hr/>
                </div>
                <div className="inner-box">
                  <div className="image">
                    <img src={require("../../images/gifs/Key-render-gif.gif")}/>
                  </div>
                  <div className="data">
                    <h3><FormattedMessage {...messages.q32018head}/></h3>
                    <p><FormattedMessage {...messages.q32018title}/></p>
                    <ul>
                      <li><FormattedMessage {...messages.q32018l1}/> </li>
                      <li><FormattedMessage {...messages.q32018l2}/></li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="box">
                <div className="hr-box">
                  <hr/>
                </div>
                <div className="inner-box">
                  <div className="image">
                    <img src={require("../../images/gifs/Reward-logo-Gif.gif")}/>
                  </div>
                  <div className="data">
                    <h3><FormattedMessage {...messages.q42018head}/></h3>
                    <p><FormattedMessage {...messages.q42018title}/></p>
                    <ul>
                      <li><FormattedMessage {...messages.q42018l1}/></li>
                      <li><FormattedMessage {...messages.q42018l2}/></li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="box">
                <div className="hr-box">
                  <hr/>
                </div>
                <div className="inner-box">
                  <div className="image">
                    <img src={require("../../images/gifs/Heart-Logo-gif.gif")}/>
                  </div>
                  <div className="data">
                    <h3><FormattedMessage {...messages.q12019head}/></h3>
                    <p><FormattedMessage {...messages.q12019title}/></p>
                    <ul>
                      <li><FormattedMessage {...messages.q12019l1}/></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="hr-box">
                  <hr/>
                </div>
                <div className="inner-box"><div className="image">
                  <img src={require("../../images/gifs/Water-Logo-gif.gif")}/>
                </div>
                  <div className="data">
                    <h3><FormattedMessage {...messages.q32019head}/></h3>
                    <p><FormattedMessage {...messages.q32019title}/></p>
                    <ul>
                      <li><FormattedMessage {...messages.q32019l1}/></li>
                      <li><FormattedMessage {...messages.q32019l2}/></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="hr-box">
                  <hr/>
                </div>
                <div className="inner-box">
                  <div className="image">
                    <img src={require("../../images/gifs/Gaming-logo-gif.gif")}/>
                  </div>
                  <div className="data">
                    <h3><FormattedMessage {...messages.q42019head}/></h3>
                    <p><FormattedMessage {...messages.q42019title}/></p>
                    <ul>
                      <li><FormattedMessage {...messages.q42019l1}/></li>
                      <li><FormattedMessage {...messages.q42019l2}/></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <p className="mid-dot-bottom">&middot;</p>
        </div>
      </div>
    )
  }
}

MobileRoadmap.propTypes = {

};

export default MobileRoadmap;
