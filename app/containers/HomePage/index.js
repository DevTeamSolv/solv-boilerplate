import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CountdownTimer from '../../components/CountdownTimer/Loadable';
import UniqueSection from '../../components/UniqueSection/Loadable';
import RoadMap from '../../components/RoadMap/Loadable';
import MobileRoadMap from '../../components/MobileRoadMap/Loadable';
import AudioPlayer from '../../components/AudioPlayer/index';
import SliderComp from '../../components/SliderComp/index';
import TeamDetails from '../../components/TeamDetails/Loadable';
import Sale from '../../containers/Sale/Loadable';
import moment from 'moment';
import SkyLight from 'react-skylight';
import $ from "jquery";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Scroll from 'react-scroll';
import {changeLocale} from "../LanguageProvider/actions";
import {makeSelectLocale} from "../LanguageProvider/selectors";
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      currentTab: 9,
      hide: true,
      mounted: true,
      paused: false,
      muted: false,
      hamburgerOpen: false,
      member: "",
      popup: "",
      phrase: ['S','O','L','U','T','I','O','N',' ','T','O','K','E','N'],
    }
  }


  handleSlide(state) {

    $(".slide-track").css("transition", "-webkit-transform 500ms ease")
    var matrix = $('.slide-track').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    var x = matrix[12] || matrix[4];
    x =  parseInt(x)
    if (state === "prev" && this.state.currentTab !== 1) {
      this.handleDialog(this.state.currentTab-1);
    }
    else if (state === "next" && this.state.currentTab !== 4) {
      this.handleDialog(this.state.currentTab+1);
    }
  }
  handleDialog(evt){
    if(evt === 1) {
      this.setState({
        popup: "humanity"
      })
      this.sliderDialog1.show();
    }
    else if (evt === 2) {
      this.setState({
        popup: "water"
      })
      this.sliderDialog2.show();
    }
    else if (evt === 3) {
      this.setState({
        popup: "game"
      })
      this.sliderDialog3.show();
    }
    else if (evt === 4) {
      this.setState({
        popup: "wallet"
      })
      this.sliderDialog4.show();
    }
  }

  handleDetails(name){
    this.setState({
      member: name
    })
    this.teamDialog.show();
  }
  onClickFooter () {
    // scrollify.next();
    // var x = scrollify.current();
    // console.log(x[0])
    // console.log(x[0].class)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    console.log(window.innerWidth)
    if(window.innerWidth < 768) {
      this.setState({
        hamburgerOpen: true
      })
    }
    // var el = document.getElementById('myVideo')
    // el.play();
    // el.muted = false;
  }
  mount = true;
  componentWillUnmount () {
    this.setState({
      mounted: false
    })
    this.mount = false;
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll() {
    if (this.mount) {
      var winHeight = $(window).height(),
        docHeight = $(document).height(),
        value = $(window).scrollTop(),
        max, percent;
      // if(value>0) {
      //     $('.goog-te-banner-frame').css('position', 'relative');
      // }
      // else if (value<200) {
      //     $('.goog-te-banner-frame').css('position', 'fixed');
      // }
      if(value > 20) {
        this.setState({
          hide: false
        })
        $('#overlay').css('top', '69px');
        $('body').css('top', '40px');
        $('.goog-te-banner-frame').css('display', 'none');
      }
      else {
        this.setState({
          hide: true
        })
        $('#overlay').css('top', '90px');
        $('body').css('top', '0px');
        $('.goog-te-banner-frame').css('display', 'block');
      }
    }

    var scrollPos = $(document).scrollTop();
    $('.nav-bar a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      // console.log(currLink, currLink.position(), scrollPos)
      // console.log(refElement, refElement.position(), refElement.height())
      if(refElement.position()) {
        if (refElement.position().top-68 <= scrollPos && refElement.position().top + refElement.height() > scrollPos+68) {
          $('.nav-bar a').removeClass("active");
          currLink.addClass("active");
        }
        else{
          currLink.removeClass("active");
        }
      }
    });
  }
  afterPlatformClosed(){
    this.setState({
      popup: ""
    })
  }
  handleHamburger(){
    $("#nav-icon4").toggleClass('open');
    $("#overlay").toggleClass('open');
    this.setState({
      hamburgerOpen: true
    })
  }
  handleMobileMenuClick(){
    $("#nav-icon4").removeClass('open');
    $("#overlay").removeClass('open');
  }
  handleVideo(){
    var el = document.getElementById('myVideo')
    el.muted = false;
    var audioEl = document.getElementById('myAudio')

    if(el.paused) {
      el.play();
      // audioEl.pause();
      this.setState({
        paused: false,
        // muted: true
      })
    }
    else {
      el.pause();
      this.setState({
        paused: true
      })
    }
  }
  handleMusic(){
    var el = document.getElementById('myAudio')
    var videoEl = document.getElementById('myVideo')
    // videoEl.muted = true;
    if(el.paused) {
      // console.log(this.state.muted, "paused")
      el.play();
      this.setState({
        muted: false
      })
    }
    else {
      // console.log(this.state.muted, "play")
      el.pause();
      this.setState({
        muted: true
      })
    }
  }
  handleSetActive(state){
    console.log(state)
    $(".nav-bar a").removeClass('active');
    $("#" + state).addClass('active');
  }
  scrollTo(state, evt){
    // console.log(evt, state)
    evt.preventDefault();
    $(document).off("scroll");

    $('.nav-bar a').each(function () {
      $(this).removeClass('active');
    })
    $("a" + "#" + state).addClass('active');
    var self = this

    var target = this.hash, menu = "#" + state;
    var $target = $(menu);
    console.log($target, state)
    // if($target.offset()) {
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1500, 'swing', function () {
      window.location.hash = menu;
      $(document).on("scroll", self.handleScroll());
    });
    // }
  }
  handleContact(){
    this.contact.show();
  }
  changeLocale(locale){
    this.props.changeLocale(locale);
  }
  render() {
    var settings = {
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };

    return (
      <div>
        <div className="top-langs">
          <p className={this.props.locale === "en" ? "active" : "" } onClick={this.changeLocale.bind(this, "en")}>English</p>
          <p className={this.props.locale === "th" ? "active" : "" } onClick={this.changeLocale.bind(this, "th")}>Thai</p>
          <p className={this.props.locale === "zh" ? "active" : "" } onClick={this.changeLocale.bind(this, "zh")}>Chinese</p>
        </div>
        <div className={!this.state.hide ? "scrolled animated-scroll fadeIn" : "row_51 animated-scroll"}>
          <div className="top-bar-outer">
            <div className="empty-column">
            </div>
            <div className="nav-bar">
              <div className="inner-nav">
                <a onClick={this.scrollTo.bind(this, "home")} className="active" href="#home"><FormattedMessage {...messages.navHome}/></a>
                <a  onClick={this.scrollTo.bind(this, "platform")}  href="#platform"><FormattedMessage {...messages.navPlatform}/></a>
                <a  onClick={this.scrollTo.bind(this, "roadmap")}  href="#roadmap"><FormattedMessage {...messages.navRoadmap}/></a>
                <a  onClick={this.scrollTo.bind(this, "whitepaper")}  href="#whitepaper"><FormattedMessage {...messages.navWhitepaper}/></a>
                <a  onClick={this.scrollTo.bind(this, "token-sale")}  href="#token-sale"><FormattedMessage {...messages.navSale}/></a>
                <a  onClick={this.scrollTo.bind(this, "team")}  href="#team"><FormattedMessage {...messages.navTeam}/></a>

              </div>
              {/*<div className="join-sale">*/}
                {/*<a  onClick={this.scrollTo.bind(this, "community")}  href="#community"><FormattedMessage {...messages.navJoin}/></a>*/}
              {/*</div>*/}
            </div>
            {!this.state.hamburgerOpen && <div id="google_translate_element"></div>}

            <div onClick={this.handleMusic.bind(this)} className="music-btn">
              {!this.state.muted && <div><img src={require("../../images/size-/new-music.png")}/></div>}
              {this.state.muted && <div><img src={require("../../images/size-/no-music.png")}/></div>}
            </div>
          </div>

          <div className="hamburger-button mobile-menu">
            <div onClick={this.handleMusic.bind(this)} className="music-btn">
              {!this.state.muted && <div><img src={require("../../images/music.png")}/></div>}
              {this.state.muted && <div><img src={require("../../images/no-music.png")}/></div>}
            </div>
            <div onClick={this.handleHamburger.bind(this)} id="nav-icon4">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div id="overlay" className=" mobile-menu overlay">
          <nav className="overlay-menu">
            <ul>
              <li>
                <Link to="home" onClick={this.handleMobileMenuClick.bind(this)} spy={true} offset={-60} smooth={true} duration={500}>
                  <FormattedMessage {...messages.navHome}/>
                </Link>
              </li>
              <li>
                <Link to="platform" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={700}>
                  <FormattedMessage {...messages.navPlatform}/>
                </Link>
              </li>
              <li>
                <Link className="test6" to="roadmap" offset={-50} onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={900}>
                  <FormattedMessage {...messages.navRoadmap}/>
                </Link>
              </li>
              <li>
                <Link className="test6" to="whitepaper" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={900}>
                  <FormattedMessage {...messages.navWhitepaper}/>
                </Link>
              </li>
              <li>
                <Link to="sale" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={1200}>
                  <FormattedMessage {...messages.navSale}/>
                </Link>
              </li>
              <li>
                <Link className="test6" to="team" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={1500}>
                  <FormattedMessage {...messages.navTeam}/>
                </Link>
              </li>
              <li>
                <Link className="test6" to="community" onClick={this.handleMobileMenuClick.bind(this)} spy={true} smooth={true} duration={1500}>
                  <FormattedMessage {...messages.navJoin}/>
                </Link>
                {/*<a className="button-white" onClick={this.handleMobileMenuClick.bind(this)} href="#">Join Token Sale</a>*/}
              </li>
              <li>
                {this.state.hamburgerOpen && <div id="google_translate_element"></div>}
                {/*<a className="button-white" onClick={this.handleMobileMenuClick.bind(this)} href="#">Join Token Sale</a>*/}
              </li>
            </ul>
          </nav>
        </div>
        {/*</div>*/}
        <Element name="video" className="element">
          {/*<iframe width="100%" height="900px" src="https://www.youtube.com/embed/fzLdtFAyFFA?rel=0&controls=0&loop=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>*/}
          <iframe id="iframe" width="100%" height="900px" src="https://www.youtube.com/embed/fzLdtFAyFFA?rel=0&controls=0&loop=1&showinfo=0&loop=1" frameBorder="0" loop allowFullScreen></iframe>
          {/*<video onClick={this.handleVideo.bind(this)} loop id="myVideo">*/}
          {/*<source src={require("../../images/gifs/Solv web video.mp4")} type="video/mp4" />*/}
          {/*Your browser does not support HTML5 video.*/}
          {/*</video>*/}
          <AudioPlayer />
          {/*<div onClick={this.handleVideo.bind(this)} className="audio-icon">*/}
          {/*{!this.state.paused && <img src={require("../../images/pause-coloured.png")}/>}*/}
          {/*{this.state.paused && <img src={require("../../images/110962-glowing-green-neon-icon-arrows-arrow3-right-solid-circle.png")}/>}*/}
          {/*</div>*/}
          <img className="display-none" src={require("../../images/size-/wallpaper.png")}/>
          <div className="content">
            <div className="page-content DWFullScreenPage_container" id="DWFullScreenPage1">
              <Element name="home" className="element">

                <div className="section row_30" id="home" data-tooltip="Home" data-section-name="home" data-arrow="#FFFFFF" data-id="home" data-anchor="home">
                  <div className="home-section container-hero">
                    <div className="heading1">
                      <h3>
                        <FormattedMessage {...messages.homeheading}/>
                        {/*ARE YOU PART OF THE SOLUTION?*/}
                        {/*<ReactRotatingText items={['SOLUTION TOKEN']} eraseMode="erase"/>*/}
                      </h3>
                      <p className="span13">
                        <FormattedMessage {...messages.homepara}/>

                        {/*Here at Solution Token, the benefit of our users - who we hope will span across all kinds of humanity - is our priority. We hope to earn your support by sharing our vision: what we are doing, why we are doing it, and how we will accomplish it. For more technical details and hard numbers to help you make the most well-informed decision possible, you can also explore our interactive whitepaper.<br/>*/}
                        {/*<ReactRotatingText items={['A TOKEN FOR HUMANITY']} />*/}
                      </p>
                      <h4 className="pre-sale-news">
                        <FormattedMessage {...messages.homepresale}/>
                      </h4>
                    </div>

                    {/*<div id="countdown_with_background_v1">*/}
                    {/*<div className="myloader"></div>*/}
                    {/*<ul className="fullscreen_background_list">*/}
                    {/*<li>*/}
                    {/*<img src="" alt="" width="1920" height="1200" />*/}
                    {/*</li>*/}
                    {/*</ul>*/}
                    {/*</div>*/}
                    <div className="countDown">
                      <CountdownTimer endDate={moment('20/3/2018 12:00:00', 'DD/MM/YYYY hh:mm:ss')}/>
                    </div>
                  </div>
                </div>
              </Element>



              <div  id="platform">

                <div className="section row_58" data-section-name="platforms" data-tooltip="Our Platforms" data-arrow="#1d8f19" data-alternate-header="true" data-id="platforms" data-anchor="platforms" data-slider="true">
                  <div className="slide slide1"  data-id="platform" data-tooltip="Platforms" data-anchor="platform">
                    <div className="custom-post-content1"> <h3 className="client-name1"><FormattedMessage {...messages.platformhead}/></h3>
                      <p>
                        <span><FormattedMessage {...messages.platformp1}/></span>
                        <br/>
                        <FormattedMessage {...messages.platformp2}/></p>
                      <div className="column_46 desktop-view">
                        <button className="humanity" onClick={this.handleDialog.bind(this, 1)}>
                          <img title="Humanity" className="image-field1" src={require("../../images/gifs/Heart-Logo-gif.gif")}/>
                          <p><FormattedMessage {...messages.humanity}/></p>
                          <p className="read-more"><FormattedMessage {...messages.readmore}/></p>
                        </button>
                        <button className="water" onClick={this.handleDialog.bind(this, 2)}>
                          <img title="Water Solution" className="image-field1" src={require("../../images/gifs/Water-Logo-gif.gif")}/>
                          <p><FormattedMessage {...messages.water}/></p>
                          <p className="read-more"><FormattedMessage {...messages.readmore}/></p>
                        </button>

                        <button className="game" onClick={this.handleDialog.bind(this, 3)}>
                          <img title="Gaming Platform" className="image-field1" src={require("../../images/gifs/Gaming-logo-gif.gif")}/>
                          <p><FormattedMessage {...messages.game}/></p>
                          <p className="read-more"><FormattedMessage {...messages.readmore}/></p>
                        </button>
                        <button className="wallet" onClick={this.handleDialog.bind(this, 4)}>
                          <img title="Wallet & Reward" className="image-field1" src={require("../../images/gifs/Reward-logo-Gif.gif")}/>
                          <p><FormattedMessage {...messages.wallet}/></p>
                          <p className="read-more"><FormattedMessage {...messages.readmore}/></p>
                        </button>
                      </div>
                      <div className="mobile-view">
                        <div>
                          <button className="humanity" onClick={this.handleDialog.bind(this, 1)}>
                            <img className="image-field1" src={require("../../images/gifs/Heart-Logo-gif.gif")}/>
                            <p><FormattedMessage {...messages.humanity}/></p>
                            <p className="read-more"><FormattedMessage {...messages.readmore}/></p>
                          </button>
                          <button className="water" onClick={this.handleDialog.bind(this, 2)}>
                            <img className="image-field1" src={require("../../images/gifs/Water-Logo-gif.gif")}/>
                            <p><FormattedMessage {...messages.water}/></p>
                            <p className="read-more"><FormattedMessage {...messages.readmore}/></p>
                          </button>
                        </div>
                        <div>
                          <button className="game" onClick={this.handleDialog.bind(this, 3)}>
                            <img className="image-field1" src={require("../../images/gifs/Gaming-logo-gif.gif")}/>
                            <p><FormattedMessage {...messages.game}/></p>
                            <p className="read-more"><FormattedMessage {...messages.readmore}/></p>
                          </button>
                          <button className="wallet" onClick={this.handleDialog.bind(this, 4)}>
                            <img className="image-field1" src={require("../../images/gifs/Reward-logo-Gif.gif")}/>
                            <p><FormattedMessage {...messages.wallet}/></p>
                            <p className="read-more"><FormattedMessage {...messages.readmore}/></p>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                  <SkyLight
                    afterClose={this.afterPlatformClosed.bind(this)}
                    hideOnOverlayClicked={true}
                    ref={ref => this.sliderDialog1 = ref}
                  >
                    { this.state.popup === "humanity" &&
                    <div className="slider-type">
                      <SliderComp sliderNumber="1"/>
                    </div>
                    }
                  </SkyLight>
                  <SkyLight
                    afterClose={this.afterPlatformClosed.bind(this)}
                    hideOnOverlayClicked={true}
                    ref={ref => this.sliderDialog2 = ref}
                  >
                    { this.state.popup === "water" &&
                    <div className="slider-type">
                      <SliderComp sliderNumber="2"/>
                    </div>
                    }
                  </SkyLight>
                  <SkyLight
                    afterClose={this.afterPlatformClosed.bind(this)}
                    hideOnOverlayClicked={true}
                    ref={ref => this.sliderDialog3 = ref}
                  >
                    { this.state.popup === "game" &&
                    <div className="slider-type">
                      <SliderComp sliderNumber="3"/>
                    </div>
                    }
                  </SkyLight>
                  <SkyLight
                    afterClose={this.afterPlatformClosed.bind(this)}
                    hideOnOverlayClicked={true}
                    ref={ref => this.sliderDialog4 = ref}
                  >
                    { this.state.popup === "wallet" &&
                    <div className="slider-type">
                      <SliderComp sliderNumber="4"/>
                    </div>
                    }
                  </SkyLight>
                </div>
                <UniqueSection />

              </div>


              <Element name="roadmap" className="element">
                <div id="roadmap">
                  {/*<div className="desktop-view roadmap-img">*/}
                  {/*<h3>ROADMAP</h3>*/}
                  {/*<p>Interactive Roadmap Coming Soon</p>*/}
                  {/*<img  src={require("../../images/roadmap.png")}/>*/}
                  {/*</div>*/}
                  {/*<div className="mobile-view roadmap-img">*/}
                  {/*<h3>ROADMAP</h3>*/}
                  {/*<p>Interactive Roadmap Coming Soon</p>*/}
                  {/*<img src={require("../../images/mobile-roadmapfinaldave.PNG")}/>*/}
                  {/*</div>*/}
                  <RoadMap />
                  <MobileRoadMap />
                </div>
              </Element>
              <Element name="whitepaper" className="element">

                <div className="section row_31" id="whitepaper" data-tooltip="Whitepaper" data-section-name="whitepaper" data-alternate-header="true" data-arrow="#1d8f19" data-id="whitepaper" data-anchor="whitepaper">
                  <div className="full_row_4 full_row_type_fs_t2 row_35">
                    <div className="gridContainer row_36">
                      <div className="row_37">
                        <div className="column_28">
                          <img className="image5" src={require("../../images/gifs/gif-faster-smaller.gif" )}/>
                        </div>
                        <div className="column_29">
                          <div id="editable-wrapping-node">
                            <h3><span ><FormattedMessage {...messages.interactive}/></span> <span className="span14"><FormattedMessage {...messages.white}/></span></h3>
                            <p><FormattedMessage {...messages.simplicity}/><br/>
                              <span ><FormattedMessage {...messages.allow}/></span><br/>
                              <span className="download-whitepaper"><b><FormattedMessage {...messages.coming}/></b></span></p>
                            {/*<a className="button" href={require("../../images/gifs/SolutionToken_WP_v1.0.pdf")} download>Download Whitepaper 1.0</a>*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Element>

              <Element name="sale" className="element">
                <div id="token-sale">
                  <Sale />
                </div>
                {/*<div className="roadmap">*/}
                {/*<div className="outer odd first">*/}
                {/*<div className="longer">*/}
                {/*<img src={require("../../images/solution-logo.png")}/>*/}
                {/*</div>*/}
                {/*<div className="shorter"></div>*/}
                {/*</div>*/}
                {/*<div className="outer even">*/}
                {/*<div className="shorter"></div>*/}
                {/*<div className="longer"></div>*/}
                {/*</div>*/}
                {/*<div className="outer odd">*/}
                {/*<div className="longer"></div>*/}
                {/*<div className="shorter"></div>*/}
                {/*</div>*/}
                {/*<div className="outer even">*/}
                {/*<div className="shorter"></div>*/}
                {/*<div className="longer"></div>*/}
                {/*</div>*/}
                {/*<div className="outer odd">*/}
                {/*<div className="longer"></div>*/}
                {/*<div className="shorter"></div>*/}
                {/*</div>*/}
                {/*<div className="outer even">*/}
                {/*<div className="shorter"></div>*/}
                {/*<div className="longer"></div>*/}
                {/*</div>*/}
                {/*<div className="outer odd last">*/}
                {/*<div className="longer"></div>*/}
                {/*<div className="shorter"></div>*/}
                {/*</div>*/}
                {/*</div>*/}
              </Element>
              <Element name="community" className="element">
                <div id="community" className="full_row_4 full_row_type_fs_t2 row_351 community">
                  <div className="gridContainer row_36">
                    <div className="row_37">
                      {/*<div className="column_281">*/}
                      {/*<a href="https://www.facebook.com/groups/251807885358730/" target="_blank" className="social_right_icon">*/}
                      {/*<img title="Facebook Group" src={require("../../images/facebook.png")}/>*/}
                      {/*</a>*/}
                      {/*<a href="https://www.facebook.com/groups/251807885358730/" target="_blank" className="social_right_icon">*/}
                      {/*<img title="Facebook Group" src={require("../../images/icons/if_discord_2308078.png")}/>*/}
                      {/*</a>*/}
                      {/*</div>*/}
                      <div className="column_291">
                        <div id="editable-wrapping-node">
                          <h3><span ><FormattedMessage {...messages.communityHeader}/></span> </h3>
                          <div className="social-boxer">
                            <div className="social">
                              <a href="https://www.facebook.com/groups/251807885358730/" target="_blank" className="social_right_icon">
                                <img title="Facebook Group" src={require("../../images/facebook.png")}/>
                              </a>
                              <a href="javascript:;" onClick={this.handleContact.bind(this)} className="social_right_icon">
                                <img title="Facebook Group" src={require("../../images/icons/if_discord_2308078.png")}/>
                              </a>
                            </div>
                            <div className="social-data">
                              <p><FormattedMessage {...messages.commP1}/></p>
                              <p><FormattedMessage {...messages.commP2}/></p>
                              <p><b><FormattedMessage {...messages.commFollow}/></b></p>
                              <div className="social_box">
                                <a href="https://www.facebook.com/solutiontoken/" target="_blank" className="sociallink" >
                                  <img title="Facebook Page" src={require("../../images/facebook.png")}/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCV_kICMUixyMnoj5gCgVdCA" className="sociallink" target="_blank" >
                                  <img title="Youtube" src={require("../../images/icons/if_youtube_317714.png")}/>
                                </a>
                                <a href="javascript:;" onClick={this.handleContact.bind(this)} className="sociallink sociallink_inactive" >
                                  <span className="tooltiptext"><FormattedMessage {...messages.working}/></span>
                                  <img title="Youtube" src={require("../../images/icons/if_Popular_Social_Media-07_2329236.png")}/>
                                </a>
                                <a href="javascript:;" onClick={this.handleContact.bind(this)} className="sociallink sociallink_inactive" >
                                  <span className="tooltiptext"><FormattedMessage {...messages.working}/></span>
                                  <img title="Discord (Comming Soon)"  src={require("../../images/icons/if_discord_2308078.png")}/>
                                </a>
                                <a href="javascript:;" onClick={this.handleContact.bind(this)} className="sociallink sociallink_inactive">
                                  <span className="tooltiptext"><FormattedMessage {...messages.working}/></span>
                                  <img title="Snapchat (Comming soon)"  src={require("../../images/icons/if_snapchat_386706.png")}/>
                                </a>
                                <a href="javascript:;" onClick={this.handleContact.bind(this)} className="sociallink sociallink_inactive"  >
                                  <span className="tooltiptext"><FormattedMessage {...messages.working}/></span>
                                  <img title="Steemit (Comming Soon)"  src={require("../../images/icons/Layer 1.png")}/>
                                </a>
                                <a href="https://twitter.com/solutiontoken" className="sociallink"  >
                                  <img title="Twitter"  src={require("../../images/twitter.png")}/>
                                </a>
                                <a href="javascript:;" onClick={this.handleContact.bind(this)} className="sociallink sociallink_inactive"  >
                                  <span className="tooltiptext"><FormattedMessage {...messages.working}/></span>
                                  <img title="Reddit (Comming Soon)"  src={require("../../images/icons/if_reddit_2308126.png")}/>
                                </a>
                                <a href="javascript:;" onClick={this.handleContact.bind(this)} className="sociallink sociallink_inactive"  >
                                  <span className="tooltiptext"><FormattedMessage {...messages.working}/></span>
                                  <img title="BitcoinTalk (Comming Soon)"  src={require("../../images/icons/Layer 2.png")}/>
                                </a>
                                <a href="https://www.linkedin.com/company/solution-token/" className="sociallink" >
                                  <img title="LinkedIn"  src={require("../../images/icons/if_square-linkedin_317725.png")}/>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SkyLight
                    hideOnOverlayClicked={true}
                    ref={ref => this.contact = ref}>
                    <div className="community-popup">
                      <h3><FormattedMessage {...messages.communityHeader}/></h3>
                      <p><FormattedMessage {...messages.working}/>
                        <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 866 864">
<defs>
  </defs>
  <path className="cls-1" d="M432.728,0c14.048,4.275,31.209-.875,45.662,2.489,25.3,5.889,51.389,6.838,74.72,14.107,108.955,33.942,187.763,97.7,244.916,183.385,23.786,35.664,37.4,76.83,53.134,121.15,4.7,13.228,4,26.272,7.472,40.66,13.042,54.01,7.448,127.668-6.642,175.917-4.055,13.887-7.091,26.047-11.623,38.171q-0.415,2.9-.83,5.809c-8.635,18.534-15.478,37.765-24.907,55.6-26.278,49.7-70.243,101.73-114.571,133.6-5.666,4.074-10.738,10.163-16.6,14.107-24.081,16.192-54.915,35.419-83.022,46.468-27.812,10.933-56.523,17.926-88,25.724-17.461,4.325-36.327,2.6-53.965,6.638H442.69c-14.088,0-30.781.98-42.341-1.659H387.9c-15.48-3.561-32.645-2.963-48.153-7.468-36.865-10.71-71.153-20.9-101.288-37.341-18.238-9.953-35.827-18.3-52.3-29.873-72.559-50.966-129.2-122.59-161.893-213.258-5.386-14.937-7.238-28.629-11.623-44.809-3.848-14.2-5.567-31.953-9.132-47.3L1.842,449.75C-1.619,433.659.254,401.794,3.5,387.515c2.159-9.488.141-16.662,2.491-25.724,8.985-34.653,15.426-65.611,27.4-96.256,8.23-21.068,20.861-41.6,32.379-59.745C120.64,119.357,194.211,59.928,297.4,21.575c27.671-10.285,59.07-11.85,90.5-19.085l29.888-1.66C422.181,0.828,429.817,1.815,432.728,0ZM407.821,56.426c-4.879,2.831-12.875.175-19.1,1.66-9.648,2.3-20.938,2.178-31.549,4.979C333.852,69.221,310.63,75.425,289.1,83.81c-15.49,6.032-30.094,15.618-44,23.234C166.975,149.827,113.239,217.736,78.223,303.706c-9.653,23.7-12.6,50.4-19.1,77.171-3.373,13.9-2.486,33.461-2.491,49.788-0.01,38.5,4.864,72.624,14.114,102.065,4.972,15.824,7.627,30.419,14.114,44.809,34.849,77.3,86.628,136.6,156.082,179.236,11.631,7.139,23.963,11.175,36.53,17.425,27.368,13.614,58.655,21.274,92.155,29.873,9.805,2.517,17.871.246,28.227,2.49,12.195,2.642,28.614,1.655,43.172,1.659h16.6c5.611-1.272,12.606-.144,19.095-1.659,17.964-4.2,38.056-6.275,53.965-11.618,7.72-2.592,14.5-1.875,21.586-4.978,27.692-12.13,55.4-21.946,79.7-37.341,64-40.548,110.422-96.085,145.289-165.96,11.8-23.644,18.112-51.5,25.737-78.83,3.009-10.788,2.605-22.066,4.981-32.362v-9.958c3.316-15.259,3.455-42.838,0-58.086V393.324q-3.735-22.4-7.472-44.809c-6.089-21.427-12.945-42.661-20.755-61.4-41.6-99.838-117.079-171.628-220.009-209.939-23.355-8.692-48.713-11.86-74.72-18.255l-16.6-.83C451.341,54.3,427.576,56.46,407.821,56.426ZM248.418,285.45c1.517,29.152,36.092,37.641,57.286,21.575,23.272-17.642,7.884-56.606-19.1-59.746V244.79c8.052-1.96,16.144-5.453,24.907-7.468,9.545-2.195,21.5.825,28.228,2.489,26.4,6.528,43.547,20.156,55.625,40.66,18.8,31.917,8.084,83.25-15.775,101.236-10.13,7.636-20.733,15.543-34.039,19.915-19.2,6.308-46.652,1.624-59.776-5.809-25.828-14.628-37.591-27.089-45.662-59.745-1.4-5.68-3.637-18.519-1.661-26.554a169.973,169.973,0,0,1,7.472-24.064h2.491Zm261.52-38.171V244.79c8.39-2.043,17.167-5.37,26.567-7.468,27.5-6.136,63.637,17.187,73.06,29.873a105.009,105.009,0,0,1,16.6,33.191c9.122,32.09-5.889,63.979-21.585,79.661a95.36,95.36,0,0,1-29.058,19.085c-19.483,7.954-50.53,5.679-66.418-3.319-26.241-14.861-37.179-26.817-45.662-59.745-1.852-7.189-4.041-18.39-1.661-27.384a185.6,185.6,0,0,1,7.472-23.234h1.661c3.962,19.7,21.524,36.112,44.832,28.213,6.448-2.185,12.141-4.362,15.774-9.128C547.566,283.492,538.221,249.3,509.938,247.279ZM234.3,487.921c25.2-.147,30.4,18.625,40.681,33.191,6.729,9.535,16.128,17.2,23.247,26.554,3.793,4.983,10.71,9.475,15.774,13.277,17.732,13.311,35.121,27.229,57.285,36.511,13.877,5.811,29.81,7.206,45.662,10.787s39.1-.808,51.474-4.149c12.162-3.283,22.7-4.248,33.209-9.128C529.558,582,564.6,556.022,582.168,532.73c4.512-5.984,9.86-11.467,14.113-17.426,5.178-7.254,8.616-17.26,15.775-22.4,17.263-12.4,50.463,3.386,44.832,26.554-5.305,21.825-27.773,40.438-39.851,56.426-28.08,37.172-72.075,61.85-119.552,79.66-7.234,2.714-13.481,2.192-21.586,4.149-24.744,5.977-66.017,7.13-91.324,0-34.373-9.682-63.833-23.308-89.664-41.489-27.944-19.669-50.718-45.971-70.569-73.852-4.823-6.774-18.973-20.579-14.114-35.682,2.24-6.962,10.011-15.641,16.6-18.255C230.077,489.123,231.987,489.724,234.3,487.921Z"/>
</svg>

                                                </span>
                      </p>
                    </div>
                  </SkyLight>
                </div>
              </Element>
              <Element name="team" className="element">
                <div id="team" className="section row_39" data-section-name="team" data-tooltip="Team Members" data-alternate-header="true" data-arrow="#1d8f19" data-id="team" data-anchor="team">
                  <div className="full_row_8 full_row_type_fs_t4 row_44">
                    <div className="gridContainer row_47">
                      <div className="row_48">
                        <div className="column_36">
                          <h3><FormattedMessage {...messages.teamHeader}/></h3>
                          <p>"<FormattedMessage {...messages.teamDesc}/>"</p>
                          {/*<a className="button" href="#">Learn more</a>*/}
                        </div>
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                  <div className="team-details">
                    <div className="team-container desktop-view">
                      <div className="members-row">
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/ingram.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "andrew")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Andrew Ingram</p>
                              <p className="designation"><FormattedMessage {...messages.andrewDesg}/></p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/matt.png")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "matthew")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Matthew Wolff</p>
                              <p className="designation"><FormattedMessage {...messages.mattDesg}/></p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/David.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "david")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">David Casciato</p>
                              <p className="designation"><FormattedMessage {...messages.daveDesg}/></p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/Micheal.png")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "mike")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Michael Gogarty</p>
                              <p className="designation"><FormattedMessage {...messages.mikeDesg}/></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="members-row">
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/mahar_husnain.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "mahar")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Mahar Husnain</p>
                              <p className="designation"><FormattedMessage {...messages.maharDesg}/></p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/ali_Zain.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "zain")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Ali Zain</p>
                              <p className="designation"><FormattedMessage {...messages.aliDesg}/></p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container member-hassan">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/has.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "hassan")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr className="hassan"/>
                            <div className="hassan info">
                              <p className="name">Tauqeer Hassan</p>
                              <p className="designation"><FormattedMessage {...messages.hassanDesg}/></p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/Joshua L.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "legaspi")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Joshua Legaspi</p>
                              <p className="designation"><FormattedMessage {...messages.joshDesg}/></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="members-row">
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/Dean_James.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "dean")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Dean James</p>
                              <p className="designation">Marketing Director</p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/new-sean.png")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "sean")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Sean Gallagher</p>
                              <p className="designation"><FormattedMessage {...messages.seanDesg}/></p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/eli-1.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "eli")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Eli Karadsheh</p>
                              <p className="designation"><FormattedMessage {...messages.eliDesg}/></p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/SOLV PROFILES 005.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "daniel")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Daniel Faraj</p>
                              <p className="designation"><FormattedMessage {...messages.danielDesg}/></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="members-row">
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/James fawk.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "james")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">James Fawke</p>
                              <p className="designation"><FormattedMessage {...messages.jamesDesg}/> Australia</p>
                            </div>
                          </div>
                        </div>
                        <div className="member-container">
                          <div className="inner-member-container">
                            <img src={require("../../images/team/size-/Arik.jpg")}/>
                            <div className="links">
                              <a onClick={this.handleDetails.bind(this, "arik")}><FormattedMessage {...messages.bio}/></a>
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <hr/>
                            <div className="info">
                              <p className="name">Arik Balolong</p>
                              <p className="designation"><FormattedMessage {...messages.arikDesg}/></p>
                            </div>
                          </div>
                        </div>
                        {/* <div className="member-container">
                         <div className="inner-member-container">
                         <img src={require("../../images/team/size-/sample.png")}/>
                         <div className="links">
                         <a onClick={this.handleDetails.bind(this, "joshua")}>BIO</a>
                         <i className="fa fa-envelope" aria-hidden="true"></i>
                         </div>
                         <hr/>
                         <div className="info">
                         <p className="name">Joshua Julia</p>
                         <p className="designation"><FormattedMessage {...messages.jamesDesg}/> America</p>
                         </div>
                         </div>
                         </div>*/}
                      </div>

                      {/*<div className="members-row">
                       <div className="member-container">
                       <div className="inner-member-container">
                       <img src={require("../../images/team/size-/sample.png")}/>
                       <div className="links">
                       <a onClick={this.handleDetails.bind(this, "kamil")}>BIO</a>
                       <i className="fa fa-envelope" aria-hidden="true"></i>
                       </div>
                       <hr/>
                       <div className="info">
                       <p className="name">Kamil Helou</p>
                       <p className="designation">Finance Operator</p>
                       </div>
                       </div>
                       </div>
                       </div>*/}
                    </div>

                    <div className="mobile-menu">
                      <Slider {...settings}>
                        <div className="slider-continer">
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/ingram.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "andrew")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Andrew Ingram</p>
                                <p className="designation"><FormattedMessage {...messages.andrewDesg}/></p>
                              </div>
                            </div>
                          </div>
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/matt.png")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "matthew")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Matthew Wolff</p>
                                <p className="designation"><FormattedMessage {...messages.mattDesg}/></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="slider-continer">
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/David.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "david")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">David Casciato</p>
                                <p className="designation"><FormattedMessage {...messages.daveDesg}/></p>
                              </div>
                            </div>
                          </div>
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/Micheal.png")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "mike")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Michael Gogarty</p>
                                <p className="designation"><FormattedMessage {...messages.mikeDesg}/></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="slider-continer">
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/mahar_husnain.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "mahar")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Mahar Husnain</p>
                                <p className="designation"><FormattedMessage {...messages.maharDesg}/></p>
                              </div>
                            </div>
                          </div>
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/ali_Zain.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "zain")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Ali Zain</p>
                                <p className="designation"><FormattedMessage {...messages.aliDesg}/></p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider-continer">
                          <div className="member-container member-hassan">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/has.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "hassan")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr className="hassan"/>
                              <div className="hassan info">
                                <p className="name">Tauqeer Hassan</p>
                                <p className="designation"><FormattedMessage {...messages.hassanDesg}/></p>
                              </div>
                            </div>
                          </div>
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/Joshua L.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "legaspi")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Joshua Legaspi</p>
                                <p className="designation"><FormattedMessage {...messages.joshDesg}/></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="slider-continer">
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/Dean_James.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "dean")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Dean James</p>
                                <p className="designation">Marketing Director</p>
                              </div>
                            </div>
                          </div>

                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/new-sean.png")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "sean")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Sean Gallagher</p>
                                <p className="designation"><FormattedMessage {...messages.seanDesg}/></p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider-continer">
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/eli-1.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "eli")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Eli Karadsheh</p>
                                <p className="designation"><FormattedMessage {...messages.eliDesg}/></p>
                              </div>
                            </div>
                          </div>
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/SOLV PROFILES 005.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "daniel")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Daniel Faraj</p>
                                <p className="designation"><FormattedMessage {...messages.danielDesg}/></p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider-continer">
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/James fawk.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "james")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">James Fawke</p>
                                <p className="designation"><FormattedMessage {...messages.jamesDesg}/></p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider-continer">
                          <div className="member-container">
                            <div className="inner-member-container">
                              <img src={require("../../images/team/size-/Arik.jpg")}/>
                              <div className="links">
                                <a onClick={this.handleDetails.bind(this, "arik")}><FormattedMessage {...messages.bio}/></a>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <hr/>
                              <div className="info">
                                <p className="name">Arik Balolong</p>
                                <p className="designation"><FormattedMessage {...messages.arikDesg}/></p>
                              </div>
                            </div>
                          </div>

                          {/*<div className="member-container">
                           <div className="inner-member-container">
                           <img src={require("../../images/team/size-/sample.png")}/>
                           <div className="links">
                           <a onClick={this.handleDetails.bind(this, "joshua")}>BIO</a>
                           <i className="fa fa-envelope" aria-hidden="true"></i>
                           </div>
                           <hr/>
                           <div className="info">
                           <p className="name">Joshua Julia</p>
                           <p className="designation"><FormattedMessage {...messages.jamesDesg}/> America</p>
                           </div>
                           </div>
                           </div>*/}
                        </div>

                        <div className="slider-continer">
                          {/*<div className="member-container">
                           <div className="inner-member-container">
                           <img src={require("../../images/team/size-/sample.png")}/>
                           <div className="links">
                           <a onClick={this.handleDetails.bind(this, "kamil")}>BIO</a>
                           <i className="fa fa-envelope" aria-hidden="true"></i>
                           </div>
                           <hr/>
                           <div className="info">
                           <p className="name">Kamil Helou</p>
                           <p className="designation">Finance Operator</p>
                           </div>
                           </div>
                           </div>*/}
                        </div>
                      </Slider>
                    </div>
                    <SkyLight
                      hideOnOverlayClicked={true}
                      ref={ref => this.teamDialog = ref}
                    >
                      <TeamDetails member={this.state.member}/>
                    </SkyLight>
                  </div>
                </div>

              </Element>

            </div>
          </div>
          {/*<div className="footer"></div>*/}
          {/*<div className="fp-arrow-c" onClick={this.onClickFooter.bind(this)}> <span className="fp-arrow"> <i className="fa fa-chevron-down arrow" aria-hidden="true"></i></span> </div>*/}


          <div className="footer">
            <div className="box">
              <p><FormattedMessage {...messages.footer}/></p>
              {/*<a href="https://www.facebook.com/solutiontoken/" target="_blank" className="facebook2">*/}
              {/*<img  className="white" src={require("../../images/facebook_w.png")}/>*/}
              {/*<img className="original" src={require("../../images/facebook.png")}/>*/}
              {/*</a>*/}
              {/*<a href="https://twitter.com/solutiontoken" className="twitter2" target="_blank" >*/}
              {/*<img className="white" src={require("../../images/twitter_w.png")}/>*/}
              {/*<img className="original" src={require("../../images/twitter.png")}/>*/}
              {/*</a>*/}
              {/*<a href="solutiontoken.slack.com" className="slack2" target="_blank" >*/}
              {/*<img className="white" src={require("../../images/slack_w.png")}/>*/}
              {/*<img className="original" src={require("../../images/slack.png")}/>*/}
              {/*</a>*/}
              {/*<a href="#" className="btc2 forcedState__hover" target="_blank" >*/}
              {/*<img className="white" src={require("../../images/btc_w.png")}/>*/}
              {/*<img className="original" src={require("../../images/btc.png")}/>*/}
              {/*</a>*/}
              {/*<a href="#" className="steem2">*/}

              {/*</a>*/}
            </div>
            {/*<div className="box">
             <a href="#" className="facebook2">
             <i className="fa fa-facebook-square" aria-hidden="true"></i>
             </a>
             <a href="#" className="twitter2">
             <i className="fa fa-twitter-square" aria-hidden="true"></i>
             </a>
             <a href="#" className="slack2">
             <i className="fa fa-slack" aria-hidden="true"></i>
             </a>
             <a href="#" className="btc2 forcedState__hover">
             <i className="fa fa-btc" aria-hidden="true"></i>
             </a>
             <a href="#" className="steem2"></a>
             </div>*/}
          </div>
          {/*{<Notification />}*/}
        </Element>
      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});
function mapDispatchToProps(dispatch) {
  return {
    changeLocale: (val) => dispatch(changeLocale(val))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
