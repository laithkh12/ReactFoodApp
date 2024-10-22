import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Food Here</h2>
        <p>
          Explore our diverse menu, featuring a mouthwatering selection of
          dishes prepared with the finest ingredients and expert craftsmanship.
          We aim to satisfy your cravings and elevate your dining experience,
          one delicious bite at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
