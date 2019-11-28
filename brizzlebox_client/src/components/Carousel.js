import React, { Component } from "react";
import { Button } from "react-bootstrap";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

import "./css/Carousel.css";

export default class Carousel extends React.Component {
  state = {
    dimensions: 0,
    link:
      "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrizzlebox%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
  };

  componentDidMount() {
    var width = 0;
    if (this.container.offsetWidth < 500) {
      width = this.container.offsetWidth;
    } else {
      width = 500;
    }

    this.setState({
      dimensions: {
        trueWidth: this.container.offsetWidth,
        width: width,
        height: this.container.offsetHeight
      },
      link:
        "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrizzlebox%2F&tabs=timeline&width=" +
        width +
        "&height=" +
        this.container.offsetHeight +
        "&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    });

    this.myMove();
  }

  renderContent() {
    const { dimensions } = this.state;

    return (
      <div>
        width: {dimensions.width}
        <br />
        height: {dimensions.height}
      </div>
    );
  }

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

  myMove = () => {
    console.log("myMove Called");

    var elem = document.getElementsByClassName(
      "frame_container_animationv2"
    )[0];

    elem.style.width =
      document.getElementsByClassName("frame_container_item").length + "00%";

    var noOfItems = document.getElementsByClassName("frame_container_item")
      .length;
    var currentItem = 1;
    var moveLeft = false;

    var step = 0;
    var pos = 0;
    var posStep = 1;
    var frameRate = 10;
    var delay = 2000;

    var percentProgress = [];

    var noOfSteps = 100 / posStep;
    erf();

    var id = setInterval(right, frameRate);

    function erf() {
      var spacing = 4.5 / noOfSteps;
      var firstHalf = [];
      var secondHalf = [];
      var progressBar = [];
      var a_1 = 0.278393;
      var a_2 = 0.230389;
      var a_3 = 0.000972;
      var a_4 = 0.078108;
      for (var i = 0; i < noOfSteps / 2; i++) {
        var x = i * spacing;
        var newPercent =
          (1 -
            1 /
              (1 + a_1 * x + a_2 * x ** 2 + a_3 * x ** 3 + a_4 * x ** 4) ** 4) *
          50;
        firstHalf.push(50 - newPercent);
        secondHalf.push(newPercent + 50);
      }
      progressBar = firstHalf.reverse().concat(secondHalf);
      for (var i = 0; i < progressBar.length; i++) {
        percentProgress.push(progressBar[i + 1] - progressBar[i]);
      }
    }

    function right() {
      if (step == noOfSteps - 2) {
        clearInterval(id);
        step = 0;
        setTimeout(function(){ 
          if (currentItem == noOfItems - 1) {
            moveLeft = true;
          }
          if (moveLeft) {
            currentItem--;
            id = setInterval(left, frameRate);
          } else {
            currentItem++;
            id = setInterval(right, frameRate);
          }
        }, delay);
      } else {
        step++;
        pos -= percentProgress[step];
        elem.style.left = pos + "%";
      }
    }
    function left() {
      if (step == noOfSteps - 2) {
        clearInterval(id);
        step = 0;
        setTimeout(function(){ 
          if (currentItem == 0) {
            moveLeft = false;
          }
          if (moveLeft) {
            currentItem--;
            id = setInterval(left, frameRate);
          } else {
            currentItem++;
            id = setInterval(right, frameRate);
          }
         }, delay);
      } else {
        step++;
        pos += percentProgress[noOfSteps - 2 - step];
        elem.style.left = pos + "%";
      }
    }
  };

  frame_container_animationv2 = {
    height: "100%",
    width: "100%",
    overflow: "hidden",

    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative"
  };

  render() {
    const { dimensions, link } = this.state;

    return (
            <div className="frame_container" ref={el => (this.container = el)}>
              {/* <div className="Hello">{dimensions && this.renderContent()}</div> */}
              <div
                style={this.frame_container_animationv2}
                className="frame_container_animationv2"
              >
                <div className="frame_container_item">
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="brizzlebox"
                    options={{
                      height: this.state.dimensions.height,
                      width: this.state.dimensions.trueWidth
                    }}
                  />
                </div>
                <div className="frame_container_item">
                  <iframe
                    className="facebook_frame"
                    src={this.state.link}
                    // width="420px !important"
                    width={this.state.dimensions.width}
                    // height="500"
                    // height = "100%"

                    // style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <div className="frame_container_item">
                  <iframe
                    className="facebook_frame"
                    src={this.state.link}
                    // width="420px !important"
                    width={this.state.dimensions.width}
                    // height="500"
                    // height = "100%"

                    // style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
              <Button className="frame_container_scroll_left">&lt;</Button>
              <Button className="frame_container_scroll_right">&gt;</Button>
            </div>
    );
  }
}
