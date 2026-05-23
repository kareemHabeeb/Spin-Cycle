import React from "react";
import "../Logout/Logout.css"
import Button from "../../Components/Props/Button"

const Logout = () => {
  return (
    <section className="logout_container">
      <article className="logout_holder">
        <div className="logout_text">
            <h3>Are you logging out?</h3>
            <p>You can always log back in any time. </p>
        </div>
        <div className="logout_btn">
            <Button className="logOutbtn" text="Cancel"/>
            <Button className="logOutbtn2" text="Log Out"/>

        </div>
      </article>
    </section>
  );
};

export default Logout;
