import React, { Component } from 'react';

import './viewsHome.css';

import AboutMe from '../../components/AboutMe/componentsAboutMe';
import Timeline from '../../components/Timeline/componentsTimeline';
import Technology from '../../components/Technology/componentsTechnology';
import Project from '../../components/Project/componentsProject';
import Contact from '../../components/Contact/componentsContact';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="aboutMe" class="section is-medium paddingSection">
          <AboutMe />
        </section>
        <section id="experience" class="section is-medium paddingSection">
          <Timeline />
        </section>
        <section id="project" class="section is-medium paddingSection">
          <Technology />
        </section>
        <section class="section project is-medium paddingSection">
          <Project />
        </section>
        <section id="contact" class="section is-medium paddingSection">
          <Contact />
        </section>
      </div>
    );
  }
}
