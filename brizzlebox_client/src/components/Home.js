import React, { Component } from "react";

import "./css/Home.css";


import Carousel from "./Carousel";

export default class Home extends React.Component {

  openFacebook() {
    window.open("https://www.facebook.com/brizzlebox/");
  }
  openInstagram() {
    window.open("https://www.instagram.com/brizzlebox/");
  }
  openTwitter() {
    window.open("https://twitter.com/brizzlebox");
  }
  openYouTube() {
    window.open("https://www.youtube.com/channel/UC7-2MKKVFNDp9XN_3Stp7IA");
  }

  render() {

    return (
      <div className="Home">
        <div className="Home-header">Brizzlebox</div>
        <div className="Home-below-header">
          <div className="Home-below-about">
            <h1>
              Hey! We’re Brizzlebox, the University of Bristol A Cappella
              Society's beatboxing group!
            </h1>
            <h5>
              Aside from showcasing our wacky arrangements and odd sounds in the
              various concerts held by the A Cappella Society throughout the
              year, we also run occasional beatbox workshops to enhance your
              skills and refine your techniques, hold annual beatbox battle
              tournaments, and perform at charity events to help raise money for
              those in need.
            </h5>
            <h5>
              If you can’t help yourself making peculiar noises and would like
              to join, drop us a message or speak to one of our members. We
              generally hold auditions at the start of October, so don’t
              hesitate to come along and show us your weirdest sounds and
              craziest beats - we highly encourage people of all skill-levels to
              audition!
            </h5>
            <h5>
              This year, we’re excited to announce that we are starting a
              shoutout-video system! Simply send us a small showcase of your
              beatboxing skills (1-3 minutes) that includes a shoutout to
              Brizzlebox for a chance to have your video posted on our social
              media! This will be open to all members of the public, not just
              University of Bristol students. Please email your videos to
              brizzleboxbristol@gmail.com - we can’t wait to see what you’ve got
              for us!
            </h5>
            <h5>B Tss T B K B Pff B T T Tss Pff B Tss K K B B K T Pshhh</h5>
          </div>

          <div className="Home-below-media">
            <div className="Home-below-media-icons">
              <div
                className="Home-below-media-icons-icon"
                onClick={this.openFacebook}
                id="facebook_icon"
              ></div>
              <div
                className="Home-below-media-icons-icon"
                onClick={this.openInstagram}
                id="instagram_icon"
              ></div>
              <div
                className="Home-below-media-icons-icon"
                onClick={this.openTwitter}
                id="twitter_icon"
              ></div>
              <div
                className="Home-below-media-icons-icon"
                onClick={this.openYouTube}
                id="youtube_icon"
              ></div>
            </div>
            <div className="carousel_container">
              <Carousel />
            </div>
          </div>
        </div>
        {/* <button onClick={() => this.myMove()}>Click Me</button> */}
        {/* <div className="container">
            <div className="row">
              <div className="col-sm-6 cold-md-6 c "> Hey</div>
              <div className="col">Hey </div>
              <div className="col">Hey </div>
            </div>
          </div> */}
      </div>
    );
  }
}
