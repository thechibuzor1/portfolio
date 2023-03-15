import React from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Bounce from "react-reveal/Bounce";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Bounce bottom>
        <Footer />
      </Bounce>
    </>
  );
};

export default App;
