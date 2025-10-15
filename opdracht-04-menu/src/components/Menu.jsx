import React from "react";

const Menu = ({ title, img, desc, price }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h2>{title}</h2>
          <h3 className="price">€{price}</h3>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;
