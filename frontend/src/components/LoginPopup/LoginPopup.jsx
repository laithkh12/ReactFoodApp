import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../Context/StoreContext.jsx";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      // Log the response to see its structure
      console.log(response.data);

      // Check for 'succes' instead of 'success'
      if (response.data.succes) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false); // Close the popup
      } else {
        alert(response.data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error in API request: ", error);
      alert("Error: Unable to process your request.");
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
          />
        </div>

        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
