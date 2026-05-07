import React from "react";
<<<<<<< HEAD
import profileImg from "../../assets/img/profile.jpg";
=======
>>>>>>> portfolio/main

const Home = () => (
    <section className="home" id="home">
      <div className="home-container container">

        <div className="home-social">
          <div className="home-social-links">
            <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer"
               className="home-social-link" aria-label="GitHub">
              <i className="uil uil-github" />
            </a>
<<<<<<< HEAD
            <a href="https://www.linkedin.com/in/guillermo-castro-abarcaa/" target="_blank" rel="noreferrer"
=======
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
>>>>>>> portfolio/main
               className="home-social-link" aria-label="LinkedIn">
              <i className="uil uil-linkedin" />
            </a>
            <a href="/CV_GuillermoCastro.pdf" download
               className="home-social-link" aria-label="Download CV">
              <i className="uil uil-file-alt"/>
            </a>
          </div>
        </div>

        <div className="home-right">
          <div className="home-float-img">
<<<<<<< HEAD
            <img src="/multitask.png" alt="Developer illustration" />
=======
            <img src="/multitask.png" alt="developer illustration" />
>>>>>>> portfolio/main
          </div>

          <div className="profile-wrapper">
            <div className="profile-image-glow" />
            <div className="profile-image-frame">
              <div className="profile-image" id="profileImage">
<<<<<<< HEAD
                <img src={profileImg} alt="Guillermo Castro" />
=======
                <div className="profile-placeholder">
                  <i className="uil uil-user" />
                </div>
>>>>>>> portfolio/main
              </div>
            </div>

            <div className="floating-badge badge-1">
              <i className="uil uil-server badge-icon" />
              <div className="badge-content">
                <span className="badge-title">Spring Boot</span>
<<<<<<< HEAD
                <span className="badge-libs">REST APIs · Java · Thymeleaf</span>
=======
                <span className="badge-libs">REST APIs · Microservices · JPA</span>
>>>>>>> portfolio/main
              </div>
            </div>

            <div className="floating-badge badge-2">
              <i className="uil uil-react badge-icon" />
              <div className="badge-content">
                <span className="badge-title">React</span>
<<<<<<< HEAD
                <span className="badge-libs">Hooks · UI · JavaScript</span>
=======
                <span className="badge-libs">Hooks · State · TypeScript</span>
>>>>>>> portfolio/main
              </div>
            </div>

            <div className="floating-badge badge-3">
<<<<<<< HEAD
              <i className="uil uil-shield-check badge-icon" />
              <div className="badge-content">
                <span className="badge-title">Cybersecurity</span>
                <span className="badge-libs">Risk · Networks · Data Protection</span>
=======
              <i className="uil uil-docker badge-icon" />
              <div className="badge-content">
                <span className="badge-title">DevOps</span>
                <span className="badge-libs">Docker · Git · CI/CD</span>
>>>>>>> portfolio/main
              </div>
            </div>
          </div>
        </div>

        <div className="home-data">
          <h1 className="home-title">
            Hi, I&rsquo;m <span className="home-title-name">Guillermo Castro</span>
          </h1>
          <h3 className="home-subtitle">Full Stack Developer</h3>
          <p className="home-description">
<<<<<<< HEAD
            Web developer focused on secure, functional and well-structured solutions across backend, frontend and system monitoring.
=======
            Web developer building secure solutions across backend, Frontend, and DevOps. Committed to collaboration and problem-solving.
>>>>>>> portfolio/main
          </p>
          <a href="#about" className="button">
            <i className="uil uil-user button-icon" />
            More About Me!
          </a>
        </div>

        <div className="my-info">
          <a href="#contact">
            <div className="info-item">
              <i className="uil uil-envelope-edit info-icon" />
              <div>
                <h3 className="info-title">Email</h3>
                <span className="info-subtitle">guillermoandca@gmail.com</span>
              </div>
            </div>
          </a>

<<<<<<< HEAD
          <a href="https://github.com/gacastroo" target="_blank" rel="noreferrer">
=======
          <a href="https://github.com/gacastroo">
>>>>>>> portfolio/main
            <div className="info-item">
              <i className="uil uil-github info-icon" />
              <div>
                <h3 className="info-title">GitHub</h3>
                <span className="info-subtitle">gacastroo</span>
              </div>
            </div>
          </a>

          <div className="info-item">
            <i className="uil uil-map-marker info-icon" />
            <div>
              <h3 className="info-title">Location</h3>
<<<<<<< HEAD
              <span className="info-subtitle">Madrid, Spain</span>
=======
              <span className="info-subtitle">Spain</span>
>>>>>>> portfolio/main
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default Home;
