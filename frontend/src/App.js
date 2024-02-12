import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Page/Shop";
import ShopCategory from "./Page/ShopCategory";
import Product from "./Page/Product";
import Cart from "./Page/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";


const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`container ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="mens" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="womens" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kids" />}
          />
          <Route path="/products" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
