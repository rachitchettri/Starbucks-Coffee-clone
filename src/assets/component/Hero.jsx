import React from "react";
import "./Hero.css";
import Hero1 from "./hero1.png";
const Hero = () => {
  return (
    <div>
    <div className="hero-left">
    <div className="heroimg">
      <img src={Hero1} alt="" />
    </div>
    </div>
    <div className="hero-right">

    </div>
    </div>
  );
};

export default Hero;
