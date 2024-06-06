import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
 

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div class="lightning">
          <div class="noisy">
            <span>Software Developer</span>
            Chibuzor
          </div>
        </div>

        {/*  <CTA /> */}
       {/*  <HeaderSocials /> */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
