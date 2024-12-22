import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext.jsx"; // Import UserContext
import { useNavigate } from "react-router-dom";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // To show loading indicator

  const navigate = useNavigate(); // For redirecting after successful signup

  const { login } = useContext(UserContext); // Access login function from context

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    setError(null); // Reset error message

    // Prepare data to send to backend
    const userData = {
      name,
      email,
      password,
      shippingAddress,
      phone,
    };

    try {
      // Send POST request to the backend for signup
      const response = await axios.post("/auth/signup", userData);

      console.log(response.data);

      // Assuming backend sends token and user data in response
      const { token, user } = response.data;

      // Call login function from UserContext to store user and token
      login(token, user);

      // Redirect user to home page or a protected route
      navigate("/"); // Redirect to home page
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError("Error signing up. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Shipping Address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
