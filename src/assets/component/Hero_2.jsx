import React from 'react'
import Hero2 from "./pink_drinks.png"
import "./Hero_2.css";

const Hero_2 = () => {
  return (
    <div className="container_2">
        <div className="left_2">
            <h2>What the heart wants</h2>
            <div className="para_2">
                <p>Treat yourself and a friend to swirls of happiness and rich java chips with the new Chocolate-Covered Strawberry Crème Frappuccino® drink. Here for a limited time.</p>
                <button class="btn_2">Order Now</button>
            </div>

        </div>
        <div className="heroimg_2">
            <img src={Hero2} alt="" />
        </div>
    </div>
  )
}

export default Hero_2
