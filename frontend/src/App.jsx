import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />{" "}
        {/* Rendering the navigation bar */}
        <Routes>
          {/*Define multiple routes here for different components/pages*/}

          {/*Route For Home Page */}
          <Route path="/" element={<Home />} />

          {/*Route For Cart Page */}
          <Route path="/cart" element={<Cart />} />

          {/*Route For PlaceOrder Page */}
          <Route path="/order" element={<PlaceOrder />} />

          {/*Route For Verfiy Page */}
          <Route path="/verify" element={<Verify />} />

          {/*Route For MyOrders Page */}
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
