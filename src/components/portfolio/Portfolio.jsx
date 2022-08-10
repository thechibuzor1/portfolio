import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assests/portfolio1.jpg";
import IMG2 from "../../assests/portfolio2.jpg";
import IMG3 from "../../assests/portfolio3.jpg";
import IMG4 from "../../assests/portfolio4.jpg";
import IMG5 from "../../assests/portfolio5.jpg";
import IMG6 from "../../assests/netflix.png";
import WeatherApp from "../../assests/Weather.apk";
import UberEats from "../../assests/UberEats.apk";
import Todo from "../../assests/Todo.apk";

const data = [
  {
    id: 6,
    image: IMG1,
    title: "Weather App",
    github: "https://github.com/thechibuzor1/Weather-app",
    demo: WeatherApp,
    description: "A Simple UI Weather App Written In React Native."
  },
  {
    id: 2,
    image: IMG2,
    title: "Project Gym",
    github: "https://github.com/thechibuzor1/project_gym",
    demo: "https://project-gym-app.herokuapp.com/",
    description: "A Full Stack MERN E-commerce Gym Web App."
  },
  {
    id: 4,
    image: IMG3,
    title: "Chat App",
    github: "https://github.com/thechibuzor1/chat-app",
    demo: "https://project-chat-webapp.netlify.app/",
    description: "A Full Stack Realtime Chat Messaging App With Authentication & SMS Notification."
  },
  {
    id: 5,
    image: IMG4,
    title: "Todo App",
    github: "https://github.com/thechibuzor1/Todo-list",
    demo: Todo,
    description: "A simple UI Todo App Written In React Native With Async Storage."
  },
  {
    id: 3,
    image: IMG5,
    title: "Uber Eats Clone",
    github: "https://github.com/thechibuzor1/UberEats-v1.1",
    demo: UberEats,
    description: "A Restuarant E-commerce App With Firebase Written in React Native."
  },
   {
    id: 1,
    image: IMG6,
    title: "Netflix Clone",
    github: "https://github.com/thechibuzor1/netflix-clone",
    demo: "http://netflix-remake.herokuapp.com",
    description:
      "A Full Stack Netflix Clone Written in React With MongoDb and nodejs backend.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5 className="text-light">{description}</h5>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo App
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
