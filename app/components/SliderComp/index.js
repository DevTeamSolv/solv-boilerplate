/**
*
* SliderComp
*
*/

import React from 'react';
// import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SliderComp extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    var settings1 = {
      infinite: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    var settings2 = {
      infinite: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    };
    var settings3 = {
      infinite: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
    };
    var settings4 = {
      infinite: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 3,
    };
    return (
      <div>
        {
          this.props.sliderNumber === '1' &&
          <Slider {...settings1}>
            <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                 data-anchor="humanitarian" id="human">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Heart-Logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.humanityhead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                        <p>
                                                            <FormattedMessage {...messages.humanitypara}/>
                                                        </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water"
                 id="water">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Water-Logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.waterhead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.waterpara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide4" data-id="gaming" data-tooltip="Gaming Platform"
                 data-anchor="gaming" id="game">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Gaming-logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.gamehead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.gamepara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                 data-anchor="rewards" id="wallet">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Reward-logo-Gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.wallethead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.walletpara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
          </Slider>
        }
        {
          this.props.sliderNumber === '2' &&
          <Slider {...settings2}>
            <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                 data-anchor="humanitarian" id="human">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Heart-Logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.humanityhead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                        <p>
                                                            <FormattedMessage {...messages.humanitypara}/>
                                                        </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water"
                 id="water">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Water-Logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.waterhead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.waterpara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide4" data-id="gaming" data-tooltip="Gaming Platform"
                 data-anchor="gaming" id="game">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Gaming-logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.gamehead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.gamepara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                 data-anchor="rewards" id="wallet">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Reward-logo-Gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.wallethead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                        <FormattedMessage {...messages.walletpara}/>

                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
          </Slider>
        }
        {
          this.props.sliderNumber === '3' &&
          <Slider {...settings3}>
            <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                 data-anchor="humanitarian" id="human">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Heart-Logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.humanityhead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                        <p>
                                                            <FormattedMessage {...messages.humanitypara}/>
                                                        </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water"
                 id="water">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Water-Logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.waterhead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.waterpara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide4" data-id="gaming" data-tooltip="Gaming Platform"
                 data-anchor="gaming" id="game">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Gaming-logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.gamehead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.gamepara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                 data-anchor="rewards" id="wallet">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Reward-logo-Gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.wallethead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.walletpara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
          </Slider>
        }
        {
          this.props.sliderNumber === '4' &&
          <Slider {...settings4}>
            <div className="slide slide2" data-id="humanitarian" data-tooltip="Humanitarian"
                 data-anchor="humanitarian" id="human">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Heart-Logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.humanityhead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                        <p>
                                                            <FormattedMessage {...messages.humanitypara}/>
                                                        </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide3" data-id="water" data-tooltip="Water Solutions" data-anchor="water"
                 id="water">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Water-Logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.waterhead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                        <FormattedMessage {...messages.waterpara}/>

                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide4" data-id="gaming" data-tooltip="Gaming Platform"
                 data-anchor="gaming" id="game">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Gaming-logo-gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.gamehead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                          <FormattedMessage {...messages.gamepara}/>
                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
            <div className="slide slide5" data-id="rewards" data-tooltip="Wallet Rewards"
                 data-anchor="rewards" id="wallet">
              <div className="custom-post-content1"><img className="image-field2"
                                                         src={require("../../images/gifs/Reward-logo-Gif.gif")}/><span
                className="client-name1"><FormattedMessage {...messages.wallethead}/></span>
                <div className="testimonials-content-inner1">
                                                    <div className="testimonials-content-inner">
                                                      <p>
                                                        <FormattedMessage {...messages.walletpara}/>

                                                      </p>
                                                    </div>
                </div>
              </div>
            </div>
          </Slider>
        }
      </div>
    )
  }
}

export default SliderComp;
