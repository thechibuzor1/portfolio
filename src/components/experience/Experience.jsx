import React from "react";
import "./Experience.css";
import { BsCheckSquare } from "react-icons/bs";
import { Bounce } from "react-reveal";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <Bounce left>
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>React Native</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>TypeScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>TailwindCSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>NextJs</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </Bounce>
        <Bounce right>
          <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsCheckSquare className="experience__details-icon" />
                <div>
                  <h4>Sanity</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </Bounce>
      </div>
    </section>
  );
};

export default Experience;
