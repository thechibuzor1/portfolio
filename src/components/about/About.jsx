import React from "react";
import "./About.css";
import art from "../../assests/10.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Bounce } from "react-reveal";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <Bounce left>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years Working.</small>
              </article>
            </Bounce>
            <Bounce top>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>10+ Worldwide.</small>
              </article>
            </Bounce>
            <Bounce right>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>50+ Completed.</small>
              </article>
            </Bounce>
            <Bounce left>
              <a
                href="https://photos.app.goo.gl/nHhLTZDq8QF61dmAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <article className="art">
                  <img src={art} className="img" alt="my art" />
                  <h5>My Art hub</h5>
                </article>
              </a>
            </Bounce>
          </div>
          <p>
            As a problem solver who loves facing challenges in my work, I'm
            excited to be at the deployment phase of my career as a software
            developer. I'm passionate and ambitious about my work, and love to
            be on a team that questions possibilities. Independently, I've
            accomplished website and mobile app building projects as a
            freelancer for over two years.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
