import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              My name is <b>Kevin Darby</b> and I am currently studying in a
              <b> Full Stack Developer program </b>at John Abbott college.
            </p>
            <p className={classes.br}>
              I love exploring new technologies and creating useful apps.
              Whether working on a web application or backend program, I'm always aiming to write readable, accessible,
              and maintainable code.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
