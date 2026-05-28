import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import Button from "../../Components/Props/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/api/admin/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response?.data);

      toast.success(response?.data?.message || "Account created successfully!");

      resetForm();

      navigate("/login");
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="SignUpContainer">
      <article className="signUpWrapper">
        <section className="SignUpleft">
          <div className="SignUpFormHolder">
            <img
              className="FormLogo"
              src="src/assets/SpinLogo.PNG"
              alt="Logo"
            />

            <form className="SignUpForm" onSubmit={handleSubmit}>
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="FirstName"
                />

                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="FirstName"
                />

                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="FirstName"
                />

                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="FirstName"
                />

                <input
                  placeholder="Re-enter Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="FirstName"
                />
              </div>

              {error && <p className="error-text">{error}</p>}

              <div className="btn-group">
                <Button
                  type="submit"
                  className="SignUpBtn"
                  text={loading ? "Creating Account..." : "Sign Up"}
                />

                <button type="button" className="ResetBtn" onClick={resetForm}>
                  Reset
                </button>
              </div>
            </form>

            <article className="SignUpOther">
              <nav>OR</nav>

              <div>
                <img
                  className="Google"
                  src="src/assets/Frame 781.png"
                  alt="Google"
                />

                <img
                  className="Google"
                  src="src/assets/Frame 782.png"
                  alt="Social Login"
                />
              </div>
            </article>
          </div>
        </section>

        <img className="SignUpImg" src="src/assets/image 6.png" alt="Signup" />
      </article>
    </main>
  );
};

export default Signup;
