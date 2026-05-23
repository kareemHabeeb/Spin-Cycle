import React from "react";
import "./Menu.css";
import { MenuTabs } from "../../../Data/MenuData";
const Menu = () => {
  return (
    <main className="MenuContainer">
      <article className="Menuwrapper">
        {MenuTabs.map((item) => (
          <div key={item.id} className="MenuTap">
            <img src={item.img} alt={item.Tab} />
            {item.Tab}
          </div>
        ))}
      </article>
    </main>
  );
};

export default Menu;
