import React from 'react'
import'./Navbar.css'
import logo_light from '../../assets/darkbag.png'
import logo_dark from "../../assets/lightbag.png";
import serach_icon_light from '../../assets/search_w.png'
import serach_icon_dark from "../../assets/search_b.png";
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import shopping_icon_light from "../../assets/cart_b.png";
import shopping_icon_dark from "../../assets/cart_w.png";

const Navbar = ({theme , setTheme}) => {

  const toggle_mode =() =>{
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className="navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Feature</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === "light" ? serach_icon_light : serach_icon_dark}
          alt=""
          style={{
            width: "25px",
            height: "25px",
            marginLeft: "20px",
            cursor: "pointer",
          }}
        />
      </div>
      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === "light" ? toogle_light : toogle_dark}
        alt=""
        className="toggle-icon"
      />
      <img
        src={theme === "light" ? shopping_icon_light : shopping_icon_dark}
        alt=""
        className="shopping-cart-icon"
      />
    </div>
  );
}

export default Navbar



