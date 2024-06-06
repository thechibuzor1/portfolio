import React from "react";
import "./About.css";
import art from "../../assests/10.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      {/*  <h5>Get To Know</h5>
      <h2>About Me</h2> */}
      <div className="container about__container">
        <div className="about__content">
          {/*     <div className="about__cards">
            <Zoom>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years Working.</small>
              </article>
            </Zoom>
            <Zoom>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>10+ Worldwide.</small>
              </article>
            </Zoom>
            <Zoom>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>50+ Completed.</small>
              </article>
            </Zoom>
            <Zoom>
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
            </Zoom>
          </div> */}
          <p>
            A software developer who loves turning ideas into awesome apps. I
            enjoy working on projects that challenge me and let me create
            something cool.
            <br />
            <br />
            When I'm not knee-deep in code, you'll probably find me immersed in
            one of my many hobbies. I'm a big fan of video games and love
            exploring new worlds and stories. Comics and manga are another
            passion of mine— there's nothing like a good manga to get
            lost in (i.e ONE PUNCH MAN).
            <br />
            <br />
            On the creative side, I enjoy drawing whenever I get the chance.
            It's a great way to unwind and let my imagination run wild.
          </p>
         {/*  <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
