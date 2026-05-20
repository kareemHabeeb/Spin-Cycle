import React from "react";
import "./Signup.css";
import Button from "../../Components/Props/Button";

const Signup = () => {
  return (
    <main className="SignUpContainer">
      <article className="signUpWrapper">
        <section className="SignUpleft">
          <div className="SignUpFormHolder">
            <img className="FormLogo" src="src/assets/SpinLogo.PNG" alt="" />
            <form className="SignUpForm">
              <nav>
                Create an account
                <span>
                  To create an account, kindly fill in the information below
                </span>
              </nav>
              <div className="InputHolder">
                <input
                  placeholder="First Name"
                  type="text"
                  name=""
                  className="FirstName"
                />
                <input
                  placeholder="LAst Name"
                  type="text"
                  name=""
                  className="FirstName"
                />
                <input
                  placeholder="Email"
                  type="email"
                  name=""
                  className="FirstName"
                />
                <input
                  placeholder="Password"
                  type="password"
                  name=""
                  className="FirstName"
                />
                <input
                  placeholder="Re-enter Password"
                  type="text"
                  name=""
                  className="FirstName"
                />
              </div>
              <Button className="SignUpBtn" text="Sign Up" />
            </form>
            <article className="SignUpOther">
              <nav>OR</nav>
              <div>
                <img className="Google" src="src/assets/Frame 781.png" alt="" />
                <img className="Google" src="src/assets/Frame 782.png" alt="" />
              </div>
            </article>
          </div>
        </section>
        <img className="SignUpImg" src="src/assets/image 6.png" alt="" />
      </article>
    </main>
  );
};

export default Signup;
