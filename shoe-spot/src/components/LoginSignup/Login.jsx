import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import { UserContext } from "../../context/userContext";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For redirecting after successful login

  const { login } = useContext(UserContext);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const loginData = { email, password };

    try {
      // Send POST request to backend API for login
      const response = await axios.post("/auth/login", loginData);

      console.log("In Login form : ", response.data);

      // If login is successful, get token and user data
      const { token } = response.data;

      login(token);
      // Save the token to localStorage (for later use in requests)
      // localStorage.setItem("token", token);

      // localStorage.setItem("user", JSON.stringify(user)); // Saving userData as an example

      // Redirect to another page (for example, dashboard)
      navigate("/dashboard");

      console.log("Login successful"); // Handle successful login
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      console.error("Login error in Login.jsx", error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="mx-auto mb-3">Login</h1>
      {error && <p className="error mx-auto">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form mx-auto mt-3">
        <div className="form-input mx-auto w-25">
          <label htmlFor="email">Email &nbsp;</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            required
          />
        </div>
        <div className="form-input mx-auto w-25">
          <label htmlFor="password">Password &nbsp;</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn loginSignupBtn mx-auto">
          Login
        </button>
      </form>
    </div>
  );
}
