/**
*
* MobileRoadmap
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
                    <h3>Q1-2018</h3>
                    <p>Marketing & Whitepaper</p>
                    <ul>
                      <li>Completion of documents & marketing strategies</li>
                      <li>PRE-SALE stage of ICO</li>
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
                    <h3>Q2-2018</h3>
                    <p>Stage &#8544; &#8544;&#8544; &#8544;&#8544;&#8544;</p>
                    <ul>
                      <li>PRE-SALE Stage &#8544; &#8544;&#8544; &#8544;&#8544;&#8544;</li>
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
                    <h3>Q3-2018</h3>
                    <p>Stage &#8544;&#8544;&#8544; & Solution Key</p>
                    <ul>
                      <li>Final stage of ICO</li>
                      <li>Solution key initiated</li>
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
                    <h3>Q4-2018</h3>
                    <p>Solution Wallet</p>
                    <ul>
                      <li>Solution Wallet Released</li>
                      <li>Rewards program implemented</li>
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
                    <h3>Q1-2019</h3>
                    <p>Operation Humanity</p>
                    <ul>
                      <li>Operation Humanity applying platform in real world relief.</li>
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
                    <h3>Q3-2019</h3>
                    <p>Water Solutions</p>
                    <ul>
                      <li>Registering public company</li>
                      <li>Distributing products</li>
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
                    <h3>Q4-2019</h3>
                    <p>Gaming</p>
                    <ul>
                      <li>Street QRed test demo</li>
                      <li>Alpha invitations</li>
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
