/**
*
* UniqueSection
*
*/

import React from 'react';
import $ from "jquery";
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class UniqueSection extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      readMore: true
    }
  }
  readMore(evt){
    $('.' + evt + ' span.span').toggleClass('hide-text');
    $('.' + evt + ' a span.readmore').toggleClass('hide-text');
    $('.' + evt + ' a span.readless').toggleClass('hide-text');
    var R = $('.' + evt + ' a span.readmore').html();
    var P = $('.' + evt + ' span.span').html();
    // console.log(P)
    // console.log(R)
    if (R === "<FormattedMessage {...messages.readmore}/>") {
      // $('.' + evt + ' a').text(" <FormattedMessage {...messages.readless}/>");
      // P = P.replace('...', '')
      // $('.' + evt + ' span').text(P);
      // this.setState({
      //   readMore: false
      // })
    }
    else {
      // $('.' + evt + ' a').text("<FormattedMessage {...messages.readmore}/>");
      // this.setState({
      //   readMore: true
      // })
      // P += "...";
      // console.log(P)
      // $('.' + evt + ' span').text(P);
    }
  }
  render() {
    return (
      <div className="third-section section">
        <h2>What Makes US Unique?</h2>
        <img className="ad_img" src={require("../../images/100ad.png")}/>
        <div className="inner-container">
          <div className="inner-row even">
            <div className="row-container">
              <div className="box b1">
                <img src={require("../../images/icons/100 percent donations-01.png")}/>
                <h3><FormattedMessage {...messages.b1h}/></h3>
                <p>
                  <FormattedMessage {...messages.b1p1}/><span className="hide-text span span"> <FormattedMessage {...messages.b1p2}/></span><br/><a onClick={this.readMore.bind(this, "b1")}> <span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
              <div className="box b2">
                <img src={require("../../images/icons/Real world implementation-01.png")}/>
                <h3><FormattedMessage {...messages.b2h}/></h3>
                <p>
                  <FormattedMessage {...messages.b2p1}/><span className="hide-text span"> <FormattedMessage {...messages.b2p2}/></span><br/><a onClick={this.readMore.bind(this, "b2")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
              <div className="box b3">
                <img src={require("../../images/icons/Fiat Banking-01.png")}/>
                <h3><FormattedMessage {...messages.b3h}/></h3>
                <p>
                  <FormattedMessage {...messages.b3p1}/><span className="hide-text span"> <FormattedMessage {...messages.b3p2}/></span><br/><a onClick={this.readMore.bind(this, "b3")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
            </div>
          </div>
          <div className="inner-row odd">
            <div className="row-container">
              <div className="box b4">
                <img src={require("../../images/icons/Everyones a winner-01.png")}/>
                <h3><FormattedMessage {...messages.b4h}/></h3>
                <p>
                  <FormattedMessage {...messages.b4p1}/><span className="hide-text span"> <FormattedMessage {...messages.b4p2}/></span><br/><a onClick={this.readMore.bind(this, "b4")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
              <div className="box b5">
                <img src={require("../../images/icons/Giving back-01.png")}/>
                <h3><FormattedMessage {...messages.b5h}/></h3>
                <p>
                  <FormattedMessage {...messages.b5p1}/><span className="hide-text span"> <FormattedMessage {...messages.b5p2}/></span><br/><a onClick={this.readMore.bind(this, "b5")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
              <div className="box b6">
                <img src={require("../../images/icons/Merchandise-01.png")}/>
                <h3><FormattedMessage {...messages.b6h}/></h3>
                <p>
                  <FormattedMessage {...messages.b6p1}/><span className="hide-text span"> <FormattedMessage {...messages.b6p2}/></span><br/><a onClick={this.readMore.bind(this, "b6")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
            </div>
          </div>
          <div className="inner-row even">
            <div className="row-container">
              <div className="box b7">
                <img src={require("../../images/icons/Global future benefit-01.png")}/>
                <h3><FormattedMessage {...messages.b7h}/></h3>
                <p>
                  <FormattedMessage {...messages.b7p1}/> <span className="hide-text span"><FormattedMessage {...messages.b7p2}/></span><br/><a onClick={this.readMore.bind(this, "b7")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
              <div className="box b8">
                <img src={require("../../images/icons/User benefit-01.png")}/>
                <h3><FormattedMessage {...messages.b8h}/></h3>
                <p>
                  <FormattedMessage {...messages.b8p1}/><span className="hide-text span"> <FormattedMessage {...messages.b8p2}/></span><br/><a onClick={this.readMore.bind(this, "b8")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
              <div className="box b9">
                <img src={require("../../images/icons/Peer to peer-01.png")}/>
                <h3><FormattedMessage {...messages.b9h}/></h3>
                <p>
                  <FormattedMessage {...messages.b9p1}/> <span className="hide-text span"> <FormattedMessage {...messages.b9p2}/></span><br/><a onClick={this.readMore.bind(this, "b9")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
            </div>
          </div>
          <div className="inner-row even">
            <div className="row-container">
              <div className="box b10">
                <img src={require("../../images/icons/Company profitability-01.png")}/>
                <h3><FormattedMessage {...messages.b10h}/></h3>
                <p>
                  <FormattedMessage {...messages.b10p1}/><span className="hide-text span"> <FormattedMessage {...messages.b10p2}/></span><br/><a onClick={this.readMore.bind(this, "b10")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
              <div className="box b11">
                <img src={require("../../images/icons/Icons for web-01-01.png")}/>
                <h3><FormattedMessage {...messages.b11h}/></h3>
                <p>
                  <FormattedMessage {...messages.b11p1}/> <span className="hide-text span"> <FormattedMessage {...messages.b11p2}/></span><br/><a onClick={this.readMore.bind(this, "b11")}><span className="readmore"><FormattedMessage {...messages.readmore}/></span> <span className="hide-text readless"><FormattedMessage {...messages.readless}/></span> </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UniqueSection.propTypes = {

};

export default UniqueSection;
