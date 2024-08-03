import React from "react";
import menu from '../src/assets/menu.jpg'

const Menu = () => {
  return (
    <div className="menu max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold py-4">Our Menu</h1>
      <img src={menu} alt="" />
    </div>
  );
};

export default Menu;
