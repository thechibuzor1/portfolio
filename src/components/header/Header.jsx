import React from "react";
import "./Header.css";
import CTA from "./CTA";
import TypeWriterEffect from "react-typewriter-effect";
import HeaderSocials from "./HeaderSocials";
import WaterDrop from "../waterDrop/WaterDrop";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <TypeWriterEffect
          textStyle={{
            fontWeight: 500,
            fontSize: "2.5rem",
            color: "#ffffff",
            textAlign: "center",
          }}
          startDelay={2000}
          cursorColor="#ffffff"
          multiText={[
            "Chibuzor Moses",
            "6ft 2...",
            "Specialized in React and React Native",
            "Creative",
            "Able to bench 225lb...",
            "Chibuzor Moses",
          ]}
          multiTextDelay={1000}
          typeSpeed={100}
        />
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <WaterDrop />
      </div>
    </header>
  );
};

export default Header;
