import React from "react";
import "./Footer.css";
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__copyright">
        <a
          href="https://github.com/thechibuzor1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub /> github
        </a>
        <a
          href="https://www.linkedin.com/in/chibuzor-moses-311b44173/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin /> linkedin
        </a>
        <a
        href="https://dribbble.com/buzz344"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsDribbble /> dribble
      </a>
      </div>
    </footer>
  );
};

export default Footer;
