import React, { useState } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const [background, setBackground] = useState(false);
  const nav = useNavigate();
  const MenuTabs = [
    {
      id: "1",
      img: "/src/assets/Group.png",
      Tab: "Order",
      path: "/dashboard/orders",
    },
    {
      id: "2",
      img: "/src/assets/mdi_truck-cargo-container.png",
      Tab: "Pickup Schedule",
      path: "/dashboard/pickup",
    },
    {
      id: "3",
      img: "/src/assets/formkit_people.png",
      Tab: "Staff/Riders",
      path: "/dashboard/staff",
    },
    {
      id: "4",
      img: "/src/assets/hugeicons_payment-01.png",
      Tab: "Payments",
      path: "/dashboard/payments",
    },
  ];

  return (
    <main className="MenuContainer">
      <article className="Menuwrapper">
        {MenuTabs.map((item, index) => (
          <div
            key={item.id}
            className="MenuTap"
            onClick={() => {
              setBackground(index);
              nav(item.path);
            }}
            style={{
              cursor: "pointer",
              background: background === index ? "#6a9cfa" : "none",
            }}
          >
            <img src={item.img} alt={item.Tab} />
            {item.Tab}
          </div>
        ))}
      </article>
    </main>
  );
};

export default Menu;
