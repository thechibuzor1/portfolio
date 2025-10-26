import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <h2>Work</h2>
        <div className="work">
          <p>2025 - Present</p>
          <h1>Midddleman, Lagos</h1>
          <p>Backend Developer Intern (.NET)</p>
          <br />
          <h3>
            On the backend team responsible for developing and maintaining
            Midddleman's core trading platform. Using .NET 8 and Entity
            Framework Core to build scalable Web APIs and implement CQRS
            architecture patterns. Working extensively with the frontend team to
            design and integrate RESTful APIs for both web and mobile
            applications.
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
            Developing diverse digital solutions including healthcare
            applications for medication management and clinical guidelines,
            doctor appointment scheduling systems, educational study platforms,
            fitness websites, and social media applications. Focus on creating
            user-centric products that solve real-world problems, from reducing
            medication errors for at-risk patients to streamlining healthcare
            access and fitness tracking.
          </h3>
          <br />_
        </div>


        <div className="work">
          <p>2023 - 2025</p>
          <h1>Innovisionaries(Startup), Lagos</h1>
          <p>Lead Frontend developer(mobile)</p>
          <br />
          <h3>
            Led the frontend development of Innovasion Academy, an educational
            application designed to provide accessible learning resources. Built
            responsive and interactive user interfaces using React Native,
            implementing features like progress tracking, course modules, and
            multimedia content display. Collaborated closely with designers to
            translate UI/UX wireframes into a fully functional, user-friendly
            mobile application.
          </h3>
          <br />_
        </div>




      </div>
    </section>
  );
};

export default Experience;
