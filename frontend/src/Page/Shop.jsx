import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Popular/>
      <Offer/>
      <NewsLetter/>
    </div>
  );
};

export default Shop;
