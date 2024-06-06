import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <h2>Work</h2>
        <div className="work">
          <p>2023 - Present</p>
          <h1>Innovisionaries(Startup), Lagos</h1>
          <p>Lead Frontend developer(mobile)</p>
          <br />
          <h3>
            Curently responsible for building a range of different mobile
            applications, from educational apps to security apps.
          </h3>
          <br />_
        </div>
        <div className="work">
          <br />
          <p>2022 - Present</p>
          <h1>Freelance, Remote</h1>
          <p>Full stack developer(web and mobile)</p>
          <br />
          <h3>
            Working on a couple of client and personal projects ranging from gym
            websites, to social media apps, to medicine trackers that reduces
            the risk of at risk patients of over medicating or forgetting to
            take their medication.
          </h3>
          <br />_
        </div>
      </div>
    </section>
  );
};

export default Experience;
