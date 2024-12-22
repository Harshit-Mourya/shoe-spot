import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

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

      console.log(response);

      // If login is successful, get token and user data
      const { token, user } = response.data;

      login(token, user);
      // Save the token to localStorage (for later use in requests)
      // localStorage.setItem("token", token);

      // localStorage.setItem("user", JSON.stringify(user)); // Saving userData as an example

      // Redirect to another page (for example, dashboard)
      navigate("/");

      console.log("Login successful", user); // Handle successful login
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      console.error("Login error in Login.jsx", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
