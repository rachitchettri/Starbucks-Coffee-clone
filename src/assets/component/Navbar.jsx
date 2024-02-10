import React from "react";
import "./Navbar.css"
import StarbucksImage from "./s.png";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="left">
          <div className="img">
          <img src={StarbucksImage} alt="" />
          <ul>
            <li>MENU</li>
            <li>REWARDS</li>
            <li>GIFT CARDS</li>
          </ul>
          </div>
        </div>
        <div className="right">
          <div className="location">
          <img src="" alt="" />
          </div>

          <button class="white-btn">Sign in</button>
          <button class="black-btn">Join now</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
