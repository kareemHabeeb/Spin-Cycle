import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "./Hero";
import HeroText from "./HeroText";
import MissionValues from "./MissionValues";
import BoardOfDirectors from "./BoardOfDirectors";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Hero />
      <HeroText />
      <MissionValues />
      <BoardOfDirectors/>
      <Footer/>
    </>
  );
};

export default About;
