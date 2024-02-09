import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="box">
        <div className="left">
        <div className="Logo">
        <img src="./starbucks.png" alt="Logo" width="40" height="40" />
        </div>
        <nav>
            <ul>
                <li>MENU</li>
                <li>REWARD</li>
                <li>GIFT CARD</li>
            </ul>
        </nav>
        </div>
        <div className="right">

        </div>
    </div>
  )
}

export default Navbar
