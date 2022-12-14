import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
          <div className={classes.box} id="education">
            <ScrollAnimation
              offset={0}
              animateIn="fadeInLeft"
              duration={2}
              animateOnce={true}
              initiallyVisible={true}
            >
              <span className={classes.head}>MY JOURNEY</span>
              <section className={classes.container}>
                <div className={classes.container_content}>
                  <div className={classes.row}>
                    <div className={classes.row_md_12}>
                      <div className={classes.timeline_centered}>
                        <ScrollAnimation
                          offset={0}
                          animateIn="fadeInLeft"
                          duration={2.4}
                          animateOnce={true}
                          initiallyVisible={true}
                        >
                          <article className={classes.timeline_entry}>
                            <div
                              className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}
                            >
                              <MdWork />
                            </div>
                            <div className={classes.label}>
                              <h2>
                                Education <span>May(2021)-Present</span>
                              </h2>
                              <p>
                                Full Stack Developer program - John Abbott
                                college
                              </p>
                              <p>
                                Courses include Data Structures & Algorithms,
                                Web Development I & II, Cloud Security &
                                Administration, among others.
                              </p>
                            </div>
                          </article>
                        </ScrollAnimation>
                        <ScrollAnimation
                          offset={0}
                          animateIn="fadeInLeft"
                          duration={2.4}
                          animateOnce={true}
                          initiallyVisible={true}
                        >
                          <article className={classes.timeline_entry}>
                            <div className={classes.timeline_icon}>
                              <MdSchool />
                            </div>
                            <div className={classes.label}>
                              <h2>
                                Prior Education <span>2017-2019</span>
                              </h2>
                              <h2>
                                Bachelor's of Philosophy at Concordia University
                                (uncompleted){" "}
                              </h2>
                              <p>
                                My university experience taught me the
                                importance of time management and
                                prioritization, two skills I use constantly
                                while coding.
                              </p>
                            </div>
                          </article>
                        </ScrollAnimation>

                        <ScrollAnimation
                          offset={0}
                          animateIn="fadeInLeft"
                          duration={2.4}
                          animateOnce={true}
                          initiallyVisible={true}
                        >
                          <article>
                            <div
                              className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                            >
                              <MdWork />
                            </div>
                            <div className={classes.label}>
                              <h2>
                                Industry Experience{" "}
                                <span>(May 2020- Dec 2020)</span>
                              </h2>
                              <h2>Content Manager @ SUKU</h2>
                              <p>
                                Working closely with a product manager, I was
                                responsible for managing the social media pages
                                of a cryptocurrency startup that used NFTs to
                                verify product authenticity. During this
                                experience, I learned about APIs and the
                                fundamentals of computer programming, which
                                inspired me to pursue it full time.
                              </p>
                            </div>
                            <div className={classes.timeline_entry_inner}>
                              <div
                                className={
                                  classes.timeline_icon_3 || classes.color_none
                                }
                              ></div>
                            </div>
                          </article>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>
          </div>
        );
    }
}

export default Education;
