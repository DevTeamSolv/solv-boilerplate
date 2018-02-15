/**
*
* TeamDetails
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class TeamDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

      <div>
        {
          this.props.member === "andrew" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/ingram.jpg")}/>
            </div>
            <p className="name">Andrew Ingram</p>
            <p className="designation"><FormattedMessage {...messages.andrewDesg}/></p>
            <p className="description"><FormattedMessage {...messages.andrewDesc}/></p>
          </div>
        }
        {
          this.props.member === "zain" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/ali_Zain.jpg")}/>
            </div>
            <p className="name">Ali Zain</p>
            <p className="designation"><FormattedMessage {...messages.aliDesg}/></p>
            <p className="description"><FormattedMessage {...messages.aliDesc}/>
            </p>
          </div>
        }
        {
          this.props.member === "david" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/David.jpg")}/>
            </div>
            <p className="name">David Casciato</p>
            <p className="designation"><FormattedMessage {...messages.daveDesg}/></p>
            <p className="description"><FormattedMessage {...messages.daveDesc}/></p>
          </div>
        }
        {
          this.props.member === "matthew" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/matt.png")}/>
            </div>
            <p className="name">Matthew Wolff</p>
            <p className="designation"><FormattedMessage {...messages.mattDesg}/></p>
            <p className="description"><FormattedMessage {...messages.mattDesc}/></p>
          </div>
        }
        {
          this.props.member === "mike" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/Micheal.png")}/>
            </div>
            <p className="name">Michael Gogarty</p>
            <p className="designation"><FormattedMessage {...messages.mikeDesg}/></p>
            <p className="description"><FormattedMessage {...messages.mikeDesc}/>
            </p>
          </div>
        }
        {
          this.props.member === "dean" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/Dean_James.jpg")}/>
            </div>
            <p className="name">Dean James</p>
            <p className="designation">Marketing Director</p>
            <p className="description">Dean is Solution Token’s marketing director. He is responsible for managing the company’s marketing campaigns across all media platforms, and spreading the word about Solution to potential users, investors, and beneficiaries. He will also mastermind advertising campaigns, as well as perfect and finalize those suggested by other team members.</p>
          </div>
        }
        {
          this.props.member === "mahar" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/mahar_husnain.jpg")}/>
            </div>
            <p className="name">Mahar Husnain</p>
            <p className="designation"><FormattedMessage {...messages.maharDesg}/></p>
            <p className="description"><FormattedMessage {...messages.maharDesc}/>
            </p>
          </div>
        }
        {
          this.props.member === "hassan" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/has.jpg")}/>
            </div>
            <p className="name">Tauqeer Hassan</p>
            <p className="designation"><FormattedMessage {...messages.hassanDesg}/></p>
            <p className="description"><FormattedMessage {...messages.hassanDesc}/></p>
          </div>
        }
        {
          this.props.member === "anaam" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/anaam.png")}/>
            </div>
            <p className="name">Anaam Nizami</p>
            <p className="designation"><FormattedMessage {...messages.anaamDesg}/></p>
            <p className="description"><FormattedMessage {...messages.anaamDesc}/></p>
          </div>
        }
        {
          this.props.member === "sean" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/new-sean.png")}/>
            </div>
            <p className="name">Sean Gallagher</p>
            <p className="designation"><FormattedMessage {...messages.seanDesg}/></p>
            <p className="description"><FormattedMessage {...messages.seanDesc}/>
            </p>
          </div>
        }
        {
          this.props.member === "eli" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/eli-1.jpg")}/>
            </div>
            <p className="name">Eli Karadsheh</p>
            <p className="designation"><FormattedMessage {...messages.eliDesg}/></p>
            <p className="description"><FormattedMessage {...messages.eliDesc}/></p>
          </div>
        }
        {
          this.props.member === "james" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/James fawk.jpg")}/>
            </div>
            <p className="name">James Fawke</p>
            <p className="designation"><FormattedMessage {...messages.jamesDesg}/></p>
            <p className="description"><FormattedMessage {...messages.jamesDesc}/>
            </p>
          </div>
        }
        {
          this.props.member === "arik" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/Arik.jpg")}/>
            </div>
            <p className="name">Arik Balolong</p>
            <p className="designation"><FormattedMessage {...messages.arikDesg}/></p>
            <p className="description"><FormattedMessage {...messages.arikDesc}/>
            </p>
          </div>
        }
        {
          this.props.member === "daniel" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/SOLV PROFILES 005.jpg")}/>
            </div>
            <p className="name">Daniel Faraj</p>
            <p className="designation"><FormattedMessage {...messages.danielDesg}/></p>
            <p className="description"><FormattedMessage {...messages.danielDesc}/>
            </p>
          </div>
        }
        {
          this.props.member === "damian" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/Damian.jpg")}/>
            </div>
            <p className="name">Damian Godlewski</p>
            <p className="designation">Public Relations Europe</p>
            <p className="description">Damian deals with the European market for the company. He is responsible for engaging the community within his region. He is also gaining support for the company through international conferences throughout Europe.</p>
          </div>
        }
        {
          this.props.member === "legaspi" &&
          <div>
            <div className="member-img">
              <img src={require("../../images/team/size-/Joshua L.jpg")}/>
            </div>
            <p className="name">Joshua Legaspi</p>
            <p className="designation">Lead Graphics</p>
            <p className="description">Joshua is one of Solution Token’s graphics design team, and works closely with other graphics designers, web designers, and the marketing and media team to produce the graphics we need for all purposes. He is also the one behind our amazing motion and video graphics.</p>
          </div>
        }
      </div>
    );
  }
}

TeamDetails.propTypes = {

};

export default TeamDetails;
