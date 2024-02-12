import React from "react";
import "./Popular.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular overflow-hidden">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-itemm ">
        {data_product.map((item, i) => {
          return (
            <div className="popular_image">
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
