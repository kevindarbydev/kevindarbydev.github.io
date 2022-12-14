import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              
              initiallyVisible={true}
            >
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>
                  I am a full stack web developer(MERN) and build websites using
                  HTML, CSS, Javascript, ReactJs.
                  <br /> I have also good grasp on Node and NoSQL(MongoDb)
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
             
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>App Develpoment</h3>
                <p>
                  I am a novice mobile app developer, having only recently learned React Native. Come back soon to see some cool projects that I will post here!{" "}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
           
              initiallyVisible={true}
            >
              <div className={classes.other}>
                <h3>Other Interests</h3>
                <p>
                 I'm very interested in coding automation scripts for video games, such as Runescape or World of Warcraft. I frequently use Java for these tasks, though I am in the process of learning Go.{" "}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;