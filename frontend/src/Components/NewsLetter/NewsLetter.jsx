import React from "react";
import "./Newsletter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter overflow-hidden">
      <h1>Get Exclusive Offer on Your Email</h1>
      <p>Suscribe to our newschannel and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
