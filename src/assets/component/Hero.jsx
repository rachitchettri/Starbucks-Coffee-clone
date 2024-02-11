import React from "react";
import "./Hero.css";
import Hero1 from "./hero1.png";
const Hero = () => {
  return (
    

  <div className="container">
    <div className="heroimg">
      <img src={Hero1} alt="" />
    </div>
    <div className="hero-right">
    <h2>You + Starbucks Rewards = ❤️</h2>
    <div className="para">
      <p>Sounds like a perfect match. Everything you need is in the app: download and start earning free drinks and more. Plus, enjoy mobile ordering and offers made just for you.</p>
      <button class="btn">Get to app</button>
    </div>
      </div>
</div>
  );
};

export default Hero;
