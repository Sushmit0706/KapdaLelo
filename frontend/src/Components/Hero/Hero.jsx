import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand.png";
import right_img from "../../assets/collections2.png";

const Hero = () => {
  return (
    <div className="hero overflow-hidden">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className="hand-latest-btn"></div>
        <div>Latest collections</div>
        <img src="" alt="" />
      </div>
      <div className="hero-right"></div>
      <img src={right_img} alt="" />
    </div>
  );
};

export default Hero;
