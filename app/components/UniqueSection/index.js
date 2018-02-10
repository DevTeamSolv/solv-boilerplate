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
  readMore(evt){
    $('.' + evt + ' span').toggleClass('hide-text');
    var R = $('.' + evt + ' a').html();
    var P = $('.' + evt + ' span').html();
    // console.log(P)
    // console.log(R)
    if (R === "read more") {
      $('.' + evt + ' a').text(" read less");
      // P = P.replace('...', '')
      // $('.' + evt + ' span').text(P);
    }
    else {
      $('.' + evt + ' a').text("read more");
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
                <h3>100% DONATIONS</h3>
                <p>
                  We want to revolutionise the set standard for donations. Here at Solution Token, we want to remove all administrative fees and costs so that your donations are completely transparent and cost free.<span className="hide-text">  Furthermore, because we are employing blockchain technology, misappropriation, embezzlement, and fraud are all but impossible. In simple words, you will be able to track your donation and see that one hundred percent of your donated funds reach their intended recipient - giving you the peace of mind that you deserve when doing a good deed.</span><br/><a onClick={this.readMore.bind(this, "b1")}>read more</a>
                </p>
              </div>
              <div className="box b2">
                <img src={require("../../images/icons/Real world implementation-01.png")}/>
                <h3>REAL WORLD IMPLEMENTATION</h3>
                <p>
                  Our platforms are based off of real world problems to provide a real world solution. As technologically advanced and innovative a time we live in, there are still issues in the world without<span className="hide-text"> real resolutions. Therefore, Solution Token has decided to tackle these problems through long term solutions instead of temporary fixes. Our technology will adapt as we move forward into moving the world forward.</span><br/><a onClick={this.readMore.bind(this, "b2")}>read more</a>
                </p>
              </div>
              <div className="box b3">
                <img src={require("../../images/icons/Fiat Banking-01.png")}/>
                <h3>FIAT BACKING</h3>
                <p>
                  While cryptocurrencies are advancing ever closer to mass adoption, they are not a mainstream, commonly accepted currency. Therefore, we have decided that we will not base the company purely on crypto<span className="hide-text"> but use both Fiat and crypto in correlation with each other. Doing this it will help the company deal with potential issues regarding finances in a smooth way without the obstacles that are exclusive to crypto. Since we are demonstrating real world implementation at our inception, it makes sense for us to have a fiat income stream to fund company resources and productivity.</span><br/><a onClick={this.readMore.bind(this, "b3")}>read more</a>
                </p>
              </div>
            </div>
          </div>
          <div className="inner-row odd">
            <div className="row-container">
              <div className="box b4">
                <img src={require("../../images/icons/Everyones a winner-01.png")}/>
                <h3>EVERYONE'S A WINNER</h3>
                <p>
                  Everyone’s a winner! Let's think for a second, what's the best way to get everyone involved while simultaneously benefiting others, effortlessly? Our finding is that by having multiple correlated platforms<span className="hide-text"> we will be able to create a cross platform experience. By using one platform of Solution Token, it allows someone else to indirectly benefit from this use, even if they are using a different platform.</span><br/><a onClick={this.readMore.bind(this, "b4")}>read more</a>
                </p>
              </div>
              <div className="box b5">
                <img src={require("../../images/icons/Giving back-01.png")}/>
                <h3>GIVING BACK</h3>
                <p>
                  Let's focus on giving back. Our main goal is to help those in need. Through the support and use of our platforms, users will help us create Solutions. For example, every time someone gets involved with our<span className="hide-text"> Water Solutions platform, such as by buying a simple water bottle, it allows us to not just gain fiat backing but help fund wells and clean water sources in places without running water. This is Solution Token’s way of paying it forward while simultaneously introducing crypto to the world.</span><br/><a onClick={this.readMore.bind(this, "b5")}>read more</a>
                </p>
              </div>
              <div className="box b6">
                <img src={require("../../images/icons/Merchandise-01.png")}/>
                <h3>MERCHANDISE</h3>
                <p>
                  We will be opening a merchandise store for you Solution masterminds #SOLVCREW! We plan to introduce clothes, stickers, posters, bags, you name it. What makes Solution merchandise special is that every item will have<span className="hide-text"> a unique QR code which you will be able to scan for fun prizes and even Tokens! These prizes can be used and redeemed on our other platforms, such as Street QRed or even SOLV Wallet. From the public's support, this will be one form of fiat backing for the company. We will also hold fun competitions and events that people can enter while wearing our merchandise.</span><br/><a onClick={this.readMore.bind(this, "b6")}>read more</a>
                </p>
              </div>
            </div>
          </div>
          <div className="inner-row even">
            <div className="row-container">
              <div className="box b7">
                <img src={require("../../images/icons/Global future benefit-01.png")}/>
                <h3>GLOBAL FUTURE BENEFIT</h3>
                <p>
                  Moving to the future with new technology and innovators that are consistently evolving the world every day, Solution Token wants to not only stand among great innovators, but stand out. Our goal is to not only be a <span className="hide-text">household name as a real world company or a crypto company, but as a brand. Solution as a brand will have more of an impact on the world than just being a crypto company. We want to make a difference, change the world in a positive way, and make a lasting impact.</span><br/><a onClick={this.readMore.bind(this, "b7")}>read more</a>
                </p>
              </div>
              <div className="box b8">
                <img src={require("../../images/icons/User benefit-01.png")}/>
                <h3>USER BENEFIT</h3>
                <p>
                  You guys are legends! We make all this possible with you and you aren't helping us for free, not on our watch! So we have decided that by participation in any of our platforms or purchasing a product you will be rewarded in some way.<span className="hide-text"> Here are some ways that users can earn an income from us: Using and playing our game and receiving tokens from the game, holding Solution Tokens in our staking wallet you will be generating KEY tokens every month, purchasing our water bottles or merchandise will give a chance to receive tokens and extra prizes.... Be sure not to forget the competitions that we run. Even just through participating in Operation Humanity, one special donor will be in a draw to collect a prize at the end of every quarter.</span><br/><a onClick={this.readMore.bind(this, "b8")}>read more</a>
                </p>
              </div>
              <div className="box b9">
                <img src={require("../../images/icons/Peer to peer-01.png")}/>
                <h3>PEER TO PEER</h3>
                <p>
                  Our platform is focused on peer to peer action with minimal assistance from us, to be as decentralised as a platform can be. Allowing users to donate to their intended cause without us interfering. The only thing that we <span className="hide-text"> need to take part in is setting up the system for users to make the process possible.</span><br/><a onClick={this.readMore.bind(this, "b9")}>read more</a>
                </p>
              </div>
            </div>
          </div>
          <div className="inner-row even">
            <div className="row-container">
              <div className="box b10">
                <img src={require("../../images/icons/Company profitability-01.png")}/>
                <h3>COMPANY PROFITABILITY</h3>
                <p>
                  Having one hundred percent donations is great, but how long can a company sustain itself without a positive income stream?... Well, not that long. Solution Token has adapted a process in which we can still give 100% of donations<span className="hide-text"> without taking administrative fees! With multiple platforms of the company, we are able to create a positive income stream in both crypto and fiat currencies, which will help sustain the future of the company without finding our finances running out. Solution Token is here to stay for the future.</span><br/><a onClick={this.readMore.bind(this, "b10")}>read more</a>
                </p>
              </div>
              <div className="box b11">
                <img src={require("../../images/icons/Icons for web-01-01.png")}/>
                <h3>REAL WORLD & CRYPTO WORLD</h3>
                <p>
                  Solution token is here to break barriers, link together and create bridges that currently separated the two worlds. What's the difference? Well simple, Real world companies consist on one currency backing which is fiat currency <span className="hide-text"> such as the dollar, opposed to a cryptocurrency company that is built off the blockchain and backed by their own token, coin or currency. We will make it a norm that both fiat and cryptocurrencies will be useful to us and we will not neglect the use of them, as we are dependent on both to excel and also expand company productivity. We wish to set a sample for companies to follow in our way.</span><br/><a onClick={this.readMore.bind(this, "b11")}>read more</a>
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
