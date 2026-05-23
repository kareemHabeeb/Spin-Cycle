import React from "react";
import "./Head.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Head = () => {
  return (
    <main className="DashHead">
      <article className="DashHeadWrapper">
        <img className="HeadLogo" src="src/assets/SpinLogo.PNG" alt="" />
        <nav className="DashHeadSearch">
          <div>
            <img src="src/assets/SearchOutline.png" alt="Search" />
            <input type="text" placeholder="Search or type command...... " />
          </div>
        </nav>
        <div className="DashHeadProfile">
          <section className="AdminProfile1">
            <div>
              <img src="src/assets/bx_bell.png" alt="" />
            </div>

            <img className="AdminImg" src="src/assets/Frame.png" alt="" />
          </section>
          <section className="AdminProfile2">
            Spincycle Admin{" "}
            <RiArrowDropDownLine
              style={{
                width: "20%",
                height: "70%",
                display: "flex",
              }}
            />
          </section>
        </div>
      </article>
    </main>
  );
};

export default Head;
