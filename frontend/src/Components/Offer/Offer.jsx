import React from "react";
import "./Offer.css";
import exclusive_offer from "../../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offers overflow-hidden">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON THE BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_offer} alt="" />
      </div>
    </div>
  );
};

export default Offer;
