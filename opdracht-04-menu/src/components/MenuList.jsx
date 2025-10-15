import React, { useState } from "react";
import menuData from "../data";
import Menu from "./Menu";

const MenuList = () => {
  const [menu, setMenu] = useState(menuData);

  return (
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center">
        {menu.map((item) => (
          <Menu key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MenuList;
