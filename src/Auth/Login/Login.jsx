import React, { useState } from "react";
import "../Login/Login.css";
import Button from "../../Components/Props/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Email Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password Regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setError("Password is invalid");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${baseUrl}/api/admin/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response.data);
      navigate("/dashboard");

      // 👉 SAVE TOKEN HERE
      const token = response.data?.token;

      if (token) {
        localStorage.setItem("token", token);
      } else {
        console.warn("No token returned from backend");
      }

      toast.success(response.data.message || "Login successful");
    } catch (err) {
      console.log(err);

      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login_container">
      <article className="login_left">
        <article className="login_left_holder">
          <form className="login_input" onSubmit={handleSubmit}>
            <h2 style={{ color: "blue" }}>Welcome Back Admin</h2>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />

            <p>Forget Password</p>

            {error && <p className="error-text">{error}</p>}

            <div className="login_btn_holder">
              <Button
                className="login_btn"
                text={loading ? "Signing In..." : "Sign In"}
                type="submit"
              />
              OR
              <p className="login_icon">
                <FcGoogle />
                Continue sign in with Google
              </p>
              <p className="login_icon">
                <FaApple />
                Continue sign in with Apple ID
              </p>
            </div>
          </form>
        </article>
      </article>

      <article className="login_right">
        <img className="loginImg" src="src/assets/image 6.png" alt="" />
      </article>
    </section>
  );
};

export default Login;
