import React from "react";
<<<<<<< HEAD
import profileImg from "../../assets/img/profile.png";
=======
>>>>>>> portfolio/main

const About = () => (
  <section className="about section" id="about">
    <h2 className="section-title" data-heading="My Intro">About Me</h2>

    <div className="about-container container grid">
      <img
<<<<<<< HEAD
        src={profileImg}
=======
        src="../../assets/img/profile.jpg"
>>>>>>> portfolio/main
        alt="About Guillermo"
        className="about-img"
      />

      <div className="about-data">
        <h3 className="about-heading">
<<<<<<< HEAD
          Hi, I'm Guillermo Castro, based in Madrid
        </h3>
        <p className="about-description">
          I enjoy analysing systems and shaping secure, functional and well-structured solutions,
          whether through code or security event analysis. I like learning new technologies,
          solving problems with an analytical mindset and contributing in collaborative environments.
=======
          Hi, I'm Guillermo Castro, based in Spain
        </h3>
        <p className="about-description">
          I'm a frontend developer with extensive knowledge and experience working with modern web
          technologies, React, UI and UX design. I care about every detail that makes an interface
          feel great.
>>>>>>> portfolio/main
        </p>

        <div className="about-info">
          <div className="about-box">
            <i className="uil uil-award about-icon" />
            <h3 className="about-title">Experience</h3>
<<<<<<< HEAD
            <span className="about-subtitle">Internship 2025</span>
=======
            <span className="about-subtitle">2+ Years</span>
>>>>>>> portfolio/main
          </div>
          <div className="about-box">
            <i className="uil uil-suitcase-alt about-icon" />
            <h3 className="about-title">Completed</h3>
            <span className="about-subtitle">10+ Projects</span>
          </div>
          <div className="about-box">
<<<<<<< HEAD
            <i className="uil uil-shield-check about-icon" />
            <h3 className="about-title">Focus</h3>
            <span className="about-subtitle">Web & Security</span>
=======
            <i className="uil uil-headphones-alt about-icon" />
            <h3 className="about-title">Support</h3>
            <span className="about-subtitle">Online 24/7</span>
>>>>>>> portfolio/main
          </div>
        </div>

        <a href="#contact" className="button">
          <i className="uil uil-navigator button-icon" />
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default About;
