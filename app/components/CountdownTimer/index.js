/**
*
* CountdownTimer
*
*/

import React from 'react';
// import styled from 'styled-components';
import moment from "moment";

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class CountdownTimer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: {
        months: '',
        days: '',
        h: '',
        m: '',
        s: '',
        interval: function () {

        }
      },
      startDate: new moment(),
      min: new Date(),
      startTimer: false
    }
    this.tick = this.tick.bind(this);
  }


  componentDidMount() {
    this.state.interval = setInterval(this.tick, 1000)
    // this.startCircle(3);
  }

  componentWillUnmount() {
    this.state.interval && clearInterval(this.state.interval);
  }

  tick() {
    if (typeof this.props.endDate === typeof new Date()) {
      this.afterEachSecond(this.props.endDate);
    }
    else {

    }
  }

  afterEachSecond(endDate) {
    var temp = {months: '', days: '', h: '', m: '', s: ''};
    var now = moment(); // today's date
    var end = moment(endDate); // end date
    var duration = moment.duration(end.diff(now));
    if (duration.asSeconds() >= 0) {
      // if (Math.floor(duration.asMonths()) > 0) {
      //     if (Math.floor(duration.asMonths()) < 10) {
      //         temp.months = '0' + Math.floor(duration.asMonths())
      //     } else {
      //         temp.months = Math.floor(duration.asMonths())
      //     }
      // }
      if (Math.floor(duration.asDays()) > 0) {
        if (Math.floor(duration.asDays()) < 10) {
          temp.days = '0' + Math.floor(duration.asDays())
        } else {
          temp.days = Math.floor(duration.asDays())
        }
      }
      if (Math.floor(duration.asHours()) > 0) {
        if (Math.floor(duration.hours()) < 10) {
          temp.h = '0' + Math.floor(duration.hours())
        } else {
          temp.h = Math.floor(duration.hours())
        }
      }
      if (Math.floor(duration.asMinutes()) > 0) {
        if (Math.floor(duration.minutes()) < 10) {
          temp.m = '0' + Math.floor(duration.minutes())
        } else {
          temp.m = Math.floor(duration.minutes())
        }
      }
      if (Math.floor(duration.asSeconds()) > 0) {
        if (Math.floor(duration.seconds()) < 10) {
          temp.s = '0' + Math.floor(duration.seconds())
        } else {
          temp.s = Math.floor(duration.seconds())
        }
      }
    }
    this.setState({
      timeRemaining: temp
    })
  }

  render() {
    const timer = {
      display: 'flex',
      justifyContent: 'space-around'
    };
    const time = {
      color: '#fff',
      fontSize: '70px',
      fontWeight: '500',
      marginTop: '43px'
    }
    const label = {
      fontSize: '17px',
      display: 'flex',
      justifyContent: 'center',
      minWidth: 'inherit',
      color: '#7fc241',
      fontWeight: '500',
      marginTop: '41px'
    }
    const section = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '100px',
      minHeight: '100px',
      backgroundColor: '#7fc241',
      borderRadius: '100%',
      width: '120px',
      height: '120px'
    }
    return (
      <div className="timer" style={timer}>
        {
          this.state.timeRemaining.months &&
          <div className="months">
            <svg className="svg-style">
              <ellipse rx="40" ry="40" cx="45" cy="45" strokeDashoffset={-251 +((parseInt(this.state.timeRemaining.months)) * 4.183)} id="ell"></ellipse>
            </svg>
            <div className="time">{this.state.timeRemaining.months}</div>
            <div className="label">Months</div>
          </div>
        }
        {
          this.state.timeRemaining.days &&
          <div className="days">

            <svg className="svg-style">
              <ellipse rx="40" ry="40" cx="45" cy="45"  strokeDashoffset={-251 +((parseInt(this.state.timeRemaining.days)) * 4.183)} id="ell"></ellipse>
            </svg>
            <div className="time">{this.state.timeRemaining.days}</div>
            <div className="label">
              <FormattedMessage {...messages.days}/>
            </div>
          </div>
        }
        {
          this.state.timeRemaining.h &&
          <div className="hours">
            <svg className="svg-style">
              <ellipse  rx="40" ry="40" cx="45" cy="45" strokeDashoffset={-251 +((parseInt(this.state.timeRemaining.h)) * 10.454)} id="ell"></ellipse>
            </svg>
            <div className="time">{this.state.timeRemaining.h}</div>
            <div className="label">
              <FormattedMessage {...messages.hours}/>
            </div>
          </div>
        }
        {
          this.state.timeRemaining.m &&
          <div className="minutes">
            {/*<div className="section minutes">*/}
            <svg className="svg-style">
              <ellipse  rx="40" ry="40" cx="45" cy="45" strokeDashoffset={-251 +((parseInt(this.state.timeRemaining.m)) * 4.183)} id="ell"></ellipse>
            </svg>
            <div className="time">{this.state.timeRemaining.m}</div>
            <div className="label">
              <FormattedMessage {...messages.minutes}/>

            </div>
          </div>
        }
        {
          this.state.timeRemaining.s &&
          <div className="seconds">
            <svg className="svg-style">
              <ellipse  rx="40" ry="40" cx="45" cy="45" strokeDashoffset={-251 +((parseInt(this.state.timeRemaining.s)) * 4.183)} id="ell"></ellipse>
            </svg>
            <div className="time">{this.state.timeRemaining.s}</div>
            <div className="label">
              <FormattedMessage {...messages.seconds}/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default CountdownTimer;
