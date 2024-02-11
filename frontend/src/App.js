import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Page/Shop";
import ShopCategory from "./Page/ShopCategory";
import Product from "./Page/Product";
import Cart from "./Page/Cart";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`container ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/products" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
