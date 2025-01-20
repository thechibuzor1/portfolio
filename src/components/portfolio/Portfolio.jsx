import React from "react";
import "./Portfolio.css";
/* import IMG1 from "../../assests/portfolio1.jpg";
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
import IMG12 from "../../assests/wander.png"; */

/* const data = [
  {
    id: 1,
    image: IMG6,
    title: "Netflix Clone(ReactJs, NodeJs, MongoDb)",
    github: "https://github.com/thechibuzor1/netflix-clone",
    demo: "https://netflix-sample.netlify.app/",
    description:
      "A Full Stack Netflix Clone Written in ReactJS With MongoDb and nodejs backend.",
  },
  {
    id: 2,
    image: IMG11,
    title: "Take Your Pills!(React Native, Ts)",
    github: "https://github.com/thechibuzor1/takeyourpills",
    demo: "https://mega.nz/file/5nJVUR7B#V_o24DS_gjXlnrPztOFAR1p_WWKNpFH3WvFuOqIYPOk",
    description:
      "A medication tracker that reduces the risk of at risk patients of over medicating or forgetting to take their medication. Written in react native, typeScript.",
  },
  {
    id: 3,
    image: IMG12,
    title: "Wanderhub(React, Ts)",
    github: "https://github.com/thechibuzor1/wanderhub",
    demo: "https://wanderhub.netlify.app/",
    description:
      "WanderHub is a web app for worldwide location exploration. Discover new destinations, plan your travels, and get inspired by captivating images and insightful information.",
  },
  {
    id: 4,
    image: IMG7,
    title: "Netflix Clone(React Native, Js, NodeJs, MongoDB)",
    github: "https://github.com/thechibuzor1/Netflix-app-react-native",
    demo: "https://mega.nz/file/AyJxlTpZ#_wyWkU_XqaLdG-bhCrd0wRC2CAAT0mPYTJWr7oaYtrA",
    description:
      "A Full Stack Netflix Clone Written in React Native With MongoDb and nodejs backend.",
  },
  {
    id: 5,
    image: IMG9,
    title: "Twitter 2.0(Next Js, Sanity)",
    github: "https://github.com/thechibuzor1/NextJs-twitter",
    demo: "https://nextjstwitter.vercel.app/",
    description:
      "A NextJs and TailwindCSS build based off Twitter Ui with next auth, cloudinary API and sanity backend",
  },
  {
    id: 6,
    image: IMG8,
    title: "Spotify Remote Contoller(Next Js)",
    github: "https://github.com/thechibuzor1/nextJs-spotify",
    demo: "https://spotify-remote-controller.vercel.app/",
    description:
      "A NextJs and TailwindCSS build connected to SpotifyApi with NextAuth, Middleware and Recoil (Must have a spotify account to use).",
  },
  {
    id: 7,
    image: IMG2,
    title: "Project Gym(ReactJs, NodeJs, MongoDb)",
    github: "https://github.com/thechibuzor1/project_gym",
    demo: "https://projectgym.onrender.com",
    description: "A Full Stack MERN E-commerce Gym Web App.",
  },
  {
    id: 8,
    image: IMG10,
    title: "Reuben(React Native, Ts)",
    github: "https://github.com/thechibuzor1/Reuben",
    demo: "https://mega.nz/file/UihFBKhD#7v-WyLQ-ZP0-VQlG_a7cvFHRB42VLoQVOZ3jWa8bLUI",
    description:
      "A Personalized Workout Routine App With Push Notifications Written In React Native.",
  },
  {
    id: 9,
    image: IMG5,
    title: "Uber Eats Clone(React Native, Js, Firebase)",
    github: "https://github.com/thechibuzor1/UberEats-v1.1",
    demo: "https://mega.nz/file/c7xRQRqb#YboEM33nWS1pTa2mLCK3FLxWLltw3rCOcAECMxfSXfg",
    description:
      "A Restuarant E-commerce App Written in React Native With Firebase Database and authentication.",
  },
  {
    id: 10,
    image: IMG3,
    title: "Chat App(ReactJs)",
    github: "https://github.com/thechibuzor1/chat-app",
    demo: "https://project-chat-webapp.netlify.app/",
    description:
      "A Full Stack Realtime Chat Messaging App With Authentication & SMS Notification.",
  },
];
 */
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container projects">
        <h2>Projects</h2>

        <div>
          <br />
          <h1>Track Pulse</h1>
          <h3>Android - Kotlin. Room (DAO). Material UI</h3>
          <p>
             Track pulse is a lightweight offline audio player designed with Material UI dynamic color scheme, leveraging a DAO database for efficient playlist management and a robust notification media service for seamless audio playback controls.
          </p>
        </div>
        <br />
        <div class="grid-container">
          <div class="grid-item">
            <img src={require("../../assests/tp/1.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/2.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/3.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/4.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/5.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/6.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/7.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/8.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/9.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/10.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/11.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/12.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/13.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/14.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/15.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tp/16.jpg")} alt="iva 1" />
          </div>
        </div>
        <br />
        <a
          href={
            "https://github.com/thechibuzor1/TrackPulse"
          }
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More - Source code
        </a>
        <br />_
        <div>
          <br />
          <h1>Tiktok Community</h1>
          <h3>Android - Kotlin. Firebase. Material UI.</h3>
          <p>
            My first native android app. TikTok Community is a social media
            application combining features from both Twitter and TikTok. Users
            can post short videos and photos, interact through likes and
            comments, and follow other users in a dynamic feed.
          </p>
        </div>
        <br />
        <div class="grid-container">
          <div class="grid-item">
            <img src={require("../../assests/tiktok/1.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/2.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/3.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/4.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/5.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/6.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/7.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/8.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/9.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/10.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/11.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/12.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/13.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/tiktok/14.jpg")} alt="iva 1" />
          </div>
        </div>
        <br />
        <a
          href={
            "https://github.com/thechibuzor1/Tiktok-Community"
          }
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More - Source code
        </a>
        <br />_
        <div>
          <br />
          <h1>Innovasion Academy</h1>
          <h3>Android/iOS - ReactNative. Expo. Typescript.</h3>
          <p>
            Innovasion Academy is an educational platform offering diverse
            courses. It also offers interactive learning through quizzes,
            projects, and discussions
          </p>
        </div>
        <br />
        <div class="grid-container">
          <div class="grid-item">
            <img src={require("../../assests/iva/iva1.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/iva/iva2.jpg")} alt="iva 2" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/iva/iva3.jpg")} alt="iva 3" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/iva/iva4.jpg")} alt="iva 4" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/iva/iva5.jpg")} alt="iva 5" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/iva/iva6.jpg")} alt="iva 6" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/iva/iva7.jpg")} alt="iva 7" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/iva/iva8.jpg")} alt="iva 8" />
          </div>
        </div>
        <br />_
        <div>
          <br />
          <h1>Take Your Pills</h1>
          <h3>Android/iOS - ReactNative. Typescript</h3>
          <p>
            A medication tracker with push notifications that reduces the risk
            of at risk patients of over medicating or forgetting to take their
            medication.
          </p>
        </div>
        <br />
        <div class="grid-container">
          <div class="grid-item">
            <img src={require("../../assests/typ/typ1.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ2.jpg")} alt="iva 2" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ3.jpg")} alt="iva 3" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ4.jpg")} alt="iva 4" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ5.jpg")} alt="iva 5" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ6.jpg")} alt="iva 6" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ7.jpg")} alt="iva 7" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ8.jpg")} alt="iva 8" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ9.jpg")} alt="iva 8" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/typ/typ10.jpg")} alt="iva 8" />
          </div>
        </div>
        <br />
        <a
          href={
            "https://mega.nz/file/5nJVUR7B#V_o24DS_gjXlnrPztOFAR1p_WWKNpFH3WvFuOqIYPOk"
          }
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More - Preview 'Take Your Pills'
        </a>
        <br />_
        <div>
          <br />
          <h1>Wanderhub</h1>
          <h3>Web - React. Typescript. Opentripmap api.</h3>
          <p>
            WanderHub is a web app for worldwide location exploration. Discover
            new destinations, plan your travels, and get inspired by captivating
            images and insightful information.
          </p>
        </div>
        <br />
        <div class="grid-container-web">
          <div class="grid-item">
            <img
              src={require("../../assests/wander/wander1.jpg")}
              alt="iva 1"
            />
          </div>
          <div class="grid-item">
            <img
              src={require("../../assests/wander/wander2.jpg")}
              alt="iva 2"
            />
          </div>
        </div>
        <br />
        <a
          href={"https://wanderhub.netlify.app/"}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More - Wanderhub Website
        </a>
        <br />_
        <div>
          <br />
          <h1>Foodiehub</h1>
          <h3>Web - React. Typescript.</h3>
          <p>
            Foodiehub is a web app for finding recipes and building a diet plan.
          </p>
        </div>
        <br />
        <div class="grid-container-web">
          <div class="grid-item">
            <img
              src={require("../../assests/foodie/fooddie.jpg")}
              alt="iva 1"
            />
          </div>
          <div class="grid-item">
            <img
              src={require("../../assests/foodie/fooddie2.jpg")}
              alt="iva 2"
            />
          </div>
          <div class="grid-item">
            <img
              src={require("../../assests/foodie/fooddie3.jpg")}
              alt="iva 2"
            />
          </div>
        </div>
        <br />
        <a
          href={
            "https://github.com/thechibuzor1/wanderhub"
          }
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More - Source code
        </a>
        <br />_
        <div>
          <br />
          <h1>PennywisePlanner</h1>
          <h3>Android/iOS - ReactNative. Typescript</h3>
          <p>A lightweight budgeting app.</p>
        </div>
        <br />
        <div class="grid-container">
          <div class="grid-item">
            <img src={require("../../assests/pw/pw1.jpg")} alt="iva 1" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/pw/pw2.jpg")} alt="iva 2" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/pw/pw3.jpg")} alt="iva 3" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/pw/pw4.jpg")} alt="iva 4" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/pw/pw5.jpg")} alt="iva 5" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/pw/pw6.jpg")} alt="iva 6" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/pw/pw7.jpg")} alt="iva 7" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/pw/pw8.jpg")} alt="iva 8" />
          </div>
          <div class="grid-item">
            <img src={require("../../assests/pw/pw9.jpg")} alt="iva 8" />
          </div>
        </div>
        <br />
        <a
          href={
            "https://github.com/thechibuzor1/PennywisePlanner"
          }
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More - Source code
        </a>
        <br />_
      </div>

      {/*  <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <Zoom key={id}  >
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
            </Zoom>
          );
        })}
      </div> */}
    </section>
  );
};

export default Portfolio;
