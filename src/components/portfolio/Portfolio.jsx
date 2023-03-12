import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assests/portfolio1.jpg";
import IMG2 from "../../assests/portfolio2.jpg";
import IMG3 from "../../assests/portfolio3.jpg";
import IMG4 from "../../assests/portfolio4.jpg";
import IMG5 from "../../assests/portfolio5.jpg";
import IMG6 from "../../assests/netflix.png";
import IMG7 from "../../assests/netflixApp.jpg";
import IMG8 from "../../assests/Spot.png";
import IMG9 from "../../assests/twitter.png";
import IMG10 from "../../assests/octocat.png";
import IMG11 from "../../assests/pills.png";

const data = [
  {
    id: 1,
    image: IMG6,
    title: "Netflix Clone(Web)",
    github: "https://github.com/thechibuzor1/netflix-clone",
    demo: "https://netflix-sample.netlify.app/",
    description:
      "A Full Stack Netflix Clone Written in ReactJS With MongoDb and nodejs backend.",
  },
  {
    id: 2,
    image: IMG11,
    title: "Take Your Pills!(APK)",
    github: "https://github.com/thechibuzor1/takeyourpills",
    demo: "https://mega.nz/file/5nJVUR7B#V_o24DS_gjXlnrPztOFAR1p_WWKNpFH3WvFuOqIYPOk",
    description:
      "A medication tracker that reduces the risk of at risk patients of over medicating or forgetting to take their medication. Written in react native, typeScript.",
  },
  {
    id: 3,
    image: IMG7,
    title: "Netflix Clone(APK)",
    github: "https://github.com/thechibuzor1/Netflix-app-react-native",
    demo: "https://mega.nz/file/QjRFCSaY#tP39KvSM3-VASNYPUCKEbzoImB9xJY0-zo5_n9NBwtw",
    description:
      "A Full Stack Netflix Clone Written in React Native With MongoDb and nodejs backend.",
  },
   {
    id: 4,
    image: IMG9,
     title: "Twitter 2.0",
    github: "https://github.com/thechibuzor1/NextJs-twitter",
    demo: "https://nextjstwitter.vercel.app/",
    description: "A NextJs and TailwindCSS build based off Twitter Ui with next auth, cloudinary API and sanity backend",
  },
  {
    id: 5,
    image: IMG8,
     title: "Spotify Remote Contoller",
    github: "https://github.com/thechibuzor1/nextJs-spotify",
    demo: "https://spotify-remote-controller.vercel.app/",
    description: "A NextJs and TailwindCSS build connected to SpotifyApi with NextAuth, Middleware and Recoil (Must have a spotify account to use).",
  },
  {
    id: 6,
    image: IMG2,
    title: "Project Gym",
    github: "https://github.com/thechibuzor1/project_gym",
    demo: "https://project-gym-app.herokuapp.com/",
    description: "A Full Stack MERN E-commerce Gym Web App.",
  },
  {
    id: 7,
    image: IMG10,
    title: "Reuben",
    github: "https://github.com/thechibuzor1/Reuben",
    demo: "https://mega.nz/file/UihFBKhD#7v-WyLQ-ZP0-VQlG_a7cvFHRB42VLoQVOZ3jWa8bLUI",
    description:
      "A Personalized Workout Routine App With Push Notifications Written In React Native.",
  },
  {
    id: 8,
    image: IMG5,
    title: "Uber Eats Clone",
    github: "https://github.com/thechibuzor1/UberEats-v1.1",
    demo: "https://mega.nz/file/c7xRQRqb#YboEM33nWS1pTa2mLCK3FLxWLltw3rCOcAECMxfSXfg",
    description:
      "A Restuarant E-commerce App Written in React Native With Firebase Database and authentication.",
  },
  {
    id: 9,
    image: IMG3,
    title: "Chat App",
    github: "https://github.com/thechibuzor1/chat-app",
    demo: "https://project-chat-webapp.netlify.app/",
    description:
      "A Full Stack Realtime Chat Messaging App With Authentication & SMS Notification.",
  },
  {
    id: 10,
    image: IMG1,
    title: "Weather App",
    github: "https://github.com/thechibuzor1/Weather-app",
    demo: "https://mega.nz/file/Z25QDaiL#eTayeLHawh_BN6E6eW8ux3i--h1o5YN9NFByFjF99hY",
    description: "A Simple UI Weather App Written In React Native.",
  },

  {
    id: 11,
    image: IMG4,
    title: "Todo App",
    github: "https://github.com/thechibuzor1/Todo-list",
    demo: "https://mega.nz/file/ByQjST5Z#kpreAj0QBEE0M_jhFNTr4ente-p8TYjwGeoHCurJdAQ",
    description:
      "A simple UI Todo App Written In React Native With Async Storage.",
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
