/**
*
* AudioPlayer
*
*/

import React from 'react';
// import styled from 'styled-components';
import $ from "jquery";

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// require("../../images/musics/BG-music.mp3");

  var x = require("../../images/musics/BG-music.mp3");
var y = require("../../images/musics/Cloud 9 NCS Release.mp3")
  require("../../images/musics/Flares NCS Release.mp3"),
  require("../../images/musics/TRow No Copyright Music.mp3"),
  require("../../images/musics/Get Your Love.mp3"),
  require("../../images/musics/Those Nights.mp3"),
  require("../../images/musics/391 - Everybody NCS Release.mp3"),
  require("../../images/musics/Happy Days Non - Copyrighted Music.mp3"),
  require("../../images/musics/You re The Best.mp3")
  console.log(x, y)
class AudioPlayer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {
      currentTrackId: 0,
      currentTrackName: "",
      audioPaused: true,
      controlsShow: true,
      paused: true,
      allTracks: [
        require("../../images/musics/BG-music.mp3"),
        require("../../images/musics/Cloud 9 NCS Release.mp3"),
        require("../../images/musics/Flares NCS Release.mp3"),
        require("../../images/musics/TRow No Copyright Music.mp3"),
        require("../../images/musics/Get Your Love.mp3"),
        require("../../images/musics/Those Nights.mp3"),
        require("../../images/musics/391 - Everybody NCS Release.mp3"),
        require("../../images/musics/Happy Days Non - Copyrighted Music.mp3"),
        require("../../images/musics/You re The Best.mp3")
      ]
    }
  }
  handleTrancEnded(){
    var audio = document.getElementById('myAudio');
    var x = this.state.currentTrackId;
    if(this.state.currentTrackId <9) {
      this.setState({
        currentTrackId: x+1
      })
    }
    else {
      this.setState({
        currentTrackId: 0
      })
    }
    audio.pause();
    audio.play();
  }
  previous(){
    if(this.state.currentTrackId >1 ) {
      console.log(this.state.currentTrackId, "trancID --- PREVIUS")
      var audio = document.getElementById('myAudio');
      var prevTID = this.state.currentTrackId;
      this.setState({
        currentTrackId: prevTID-1
      })
      audio.src = this.state.allTracks[prevTID - 1];
      if(!this.state.audioPaused) {
        audio.play();
      }
    }
  }
  next(){
    if(this.state.currentTrackId < 8) {
      console.log(this.state.currentTrackId, "trancID --- NEXT")
      var audio = document.getElementById('myAudio');
      var nextTID = this.state.currentTrackId;
      this.setState({
        currentTrackId: nextTID+1
      })
      audio.src = this.state.allTracks[nextTID + 1];
      if(!this.state.audioPaused) {
        audio.play();
      }
    }
  }
  pausePlay () {
    var audio = document.getElementById('myAudio');
    console.log(audio.src)
    if (audio.paused){
      audio.play();
    }
    else {
      audio.pause();
    }
    this.setState({
      audioPaused: audio.paused,
    })
  }
  hideToggle(){
    var x = this.state.controlsShow;

    if(x){
      $('.audio-controls').css('transform', 'translateX(-80%)');
    }
    else {
      $('.audio-controls').css('transform', 'translateX(0%)');
    }
    this.setState({
      controlsShow: !x
    })
  }
  render() {
    return (
      <div>
        <audio onEnded={this.handleTrancEnded.bind(this)} src={require("../../images/musics/BG-music.mp3")} autoPlay loop={false} id="myAudio">
          <p>If you are reading this, it is because your browser does not support the audio element.</p>
        </audio>
        <div className="audio-controls">
          <div className="button-music">
            <img onClick={this.hideToggle.bind(this)} src={require("../../images/size-/new-music.png")}/>
          </div>
          <div className="outer-box">
            <div className="button-prev">
              <img onClick={this.previous.bind(this)} src={require("../../images/size-/prev-music.png")}/>
            </div>

            <div className="button-pause">
              {this.state.audioPaused && <img onClick={this.pausePlay.bind(this)} src={require("../../images/size-/110962-glowing-green-neon-icon-arrows-arrow3-right-solid-circle.png")}/>}
              {!this.state.audioPaused && <img onClick={this.pausePlay.bind(this)} src={require("../../images/size-/pause-coloured.png")}/>}
            </div>
            <div className="button-next">
              {this.state.currentTrackId < 9 && <img onClick={this.next.bind(this)} src={require("../../images/size-/next-music.png")}/>}
              {this.state.currentTrackId >= 9 && <img onClick={this.next.bind(this)} src={require("../../images/size-/icons8-end-filled-100.png")}/>}

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AudioPlayer;
