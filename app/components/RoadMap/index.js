/**
*
* RoadMap
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class RoadMap extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      currentEvent: "l1"
    }
  }
  mouseEnter(evt){
    this.setState({
      currentEvent: evt
    })
  }
  mouseLeave(){
    this.setState({
      currentEvent: "l1"
    })
  }
  render() {
    return (
      <div>
        <div className="roadmap desktop-view">
          <h3>ROADMAP</h3>
          <p className="mid-dot-top">&middot;</p>
          <div className="inner-container">
            <div className="left-side">
              <div className="box">
                <div className="inner-box active">
                  <div className="data">
                    <h3>Q1-2018</h3>
                    <p>Marketing & Whitepaper</p>
                    <ul>
                      <li>Completion of documents & marketing strategies</li>
                      <li>PRE-SALE stage of ICO</li>
                    </ul>
                  </div>
                  <div className="image">
                    <img src={require("../../images/gifs/solv_logo_animated.gif")}/>
                  </div>
                </div>
                <div className="hr-box">
                  <hr/>
                </div>
              </div>
              <div className="box">
                <div className="inner-box">
                  <div className="data">
                    <h3>Q3-2018</h3>
                    <p>Stage &#8544;&#8544;&#8544; & Solution Key</p>
                    <ul>
                      <li>Final stage of ICO</li>
                      <li>Solution key initiated</li>
                    </ul>
                  </div>
                  <div className="image">
                    <img src={require("../../images/gifs/Key-render-gif.gif")}/>
                  </div>
                </div>
                <div className="hr-box">
                  <hr/>
                </div>
              </div>
              <div className="box">
                <div className="inner-box">
                  <div className="data">
                    <h3>Q1-2019</h3>
                    <p>Operation Humanity</p>
                    <ul>
                      <li>Operation Humanity applying platform in real world relief.</li>
                    </ul>
                  </div>
                  <div className="image">
                    <img src={require("../../images/gifs/Heart-Logo-gif.gif")}/>
                  </div>
                </div>
                <div className="hr-box">
                  <hr/>
                </div>
              </div>
              <div className="box">
                <div className="inner-box">
                  <div className="data">
                    <h3>Q4-2019</h3>
                    <p>Gaming</p>
                    <ul>
                      <li>Street QRed test demo</li>
                      <li>Alpha invitations</li>
                    </ul>
                  </div>
                  <div className="image">
                    <img src={require("../../images/gifs/Gaming-logo-gif.gif")}/>
                  </div>
                </div>
                <div className="hr-box">
                  <hr/>
                </div>
              </div>
            </div>
            <div className="right-side">
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
            </div>
          </div>
          <p className="mid-dot-bottom">&middot;</p>
        </div>
        {/*<div className="roadmap">*/}
        {/*<div className="outer-container">*/}
        {/*<div className="inner-container">*/}
        {/*<div className="inner-row one">*/}
        {/*<div className="box">*/}
        {/*<p>Q2</p>*/}
        {/*<img onMouseEnter={this.mouseEnter.bind(this, "l2")}*/}
        {/*onMouseLeave={this.mouseLeave.bind(this)} className="img-1"*/}
        {/*src={require("../../images/gifs/Ethereum-render.gif")}/>*/}
        {/*</div>*/}
        {/*<div className="box">*/}
        {/*<p>Q1</p>*/}
        {/*<img onMouseEnter={this.mouseEnter.bind(this, "l1")}*/}
        {/*onMouseLeave={this.mouseLeave.bind(this)} className="img-2"*/}
        {/*src={require("../../images/solution-logo.png")}/>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="first-dot"></div>*/}
        {/*<hr className="hr1"/>*/}
        {/*<div className="inner-row two">*/}
        {/*<div className="box">*/}
        {/*<p>Q4</p>*/}
        {/*<img onMouseEnter={this.mouseEnter.bind(this, "l4")}*/}
        {/*onMouseLeave={this.mouseLeave.bind(this)} className="img-3"*/}
        {/*src={require("../../images/gifs/Key-render-gif.gif")}/>*/}
        {/*</div>*/}
        {/*<div className="box">*/}
        {/*<p>Q3</p>*/}
        {/*<img onMouseEnter={this.mouseEnter.bind(this, "l3")}*/}
        {/*onMouseLeave={this.mouseLeave.bind(this)} className="img-4"*/}
        {/*src={require("../../images/gifs/Reward-logo-Gif.gif")}/>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<hr className="hr2"/>*/}
        {/*<div className="inner-row three">*/}
        {/*<div className="box">*/}
        {/*<p>Q7</p>*/}
        {/*<img onMouseEnter={this.mouseEnter.bind(this, "l7")}*/}
        {/*onMouseLeave={this.mouseLeave.bind(this)} className="img-5"*/}
        {/*src={require("../../images/gifs/Gaming-logo-gif.gif")}/>*/}
        {/*</div>*/}
        {/*<div className="box">*/}
        {/*<p>Q6</p>*/}
        {/*<img onMouseEnter={this.mouseEnter.bind(this, "l6")}*/}
        {/*onMouseLeave={this.mouseLeave.bind(this)} className="img-6"*/}
        {/*src={require("../../images/gifs/Water-Logo-gif.gif")}/>*/}
        {/*</div>*/}
        {/*<div className="box">*/}
        {/*<p>Q5</p>*/}
        {/*<img onMouseEnter={this.mouseEnter.bind(this, "l5")}*/}
        {/*onMouseLeave={this.mouseLeave.bind(this)} className="img-7"*/}
        {/*src={require("../../images/gifs/Heart-Logo-gif.gif")}/>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="last-dot"></div>*/}
        {/*<hr className="hr3"/>*/}
        {/*<div className="inner-row four">*/}

        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="des-container">*/}
        {/*<div className="outer-container">*/}
        {/*<ul className={this.state.currentEvent === "l1" ? "l1 animated fadeInUp" : 'animated hide'}>*/}
        {/*<li><p className="date">Q1 - 2018</p></li>*/}
        {/*<li><p className="title">Whitepaper & Marketing</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*</ul>*/}
        {/*<ul className={this.state.currentEvent === "l2" ? "l2 animated fadeInUp" : 'animated hide'}>*/}
        {/*<li><p className="date">Q2 - 2018</p></li>*/}
        {/*<li><p className="title">PRE-SALE Stage &#8544; &#8544;&#8544; &#8544;&#8544;&#8544;</p>*/}
        {/*</li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*</ul>*/}
        {/*<ul className={this.state.currentEvent === "l3" ? "l3 animated fadeInUp" : 'animated hide'}>*/}
        {/*<li><p className="date">Q3 - 2018</p></li>*/}
        {/*<li><p className="title">Stage &#8544;&#8544;&#8544; & Solution Key</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*</ul>*/}
        {/*<ul className={this.state.currentEvent === "l4" ? "l4 animated fadeInUp" : 'animated hide'}>*/}
        {/*<li><p className="date">Q4 - 2018</p></li>*/}
        {/*<li><p className="title">Solution Wallet</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*</ul>*/}
        {/*<ul className={this.state.currentEvent === "l5" ? "l5 animated fadeInUp" : 'animated hide'}>*/}
        {/*<li><p className="date">Q1 - 2019</p></li>*/}
        {/*<li><p className="title">Operation Humanity</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*</ul>*/}
        {/*<ul className={this.state.currentEvent === "l6" ? "l6 animated fadeInUp" : 'animated hide'}>*/}
        {/*<li><p className="date">Q3 - 2019</p></li>*/}
        {/*<li><p className="title">Water Solutions</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*</ul>*/}
        {/*<ul className={this.state.currentEvent === "l7" ? "l7 animated fadeInUp" : 'animated hide'}>*/}
        {/*<li><p className="date">Q4 - 2019</p></li>*/}
        {/*<li><p className="title">Gaming</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*<li><p>Blah Blah blah</p></li>*/}
        {/*</ul>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    )
  }
}

RoadMap.propTypes = {

};

export default RoadMap;
