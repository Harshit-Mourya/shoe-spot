import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext.jsx"; // Import UserContext
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

import axios from "axios";
axios.defaults.baseURL = "https://shoe-spot.onrender.com";

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

      console.log("In signup form : ", response.data);

      // Assuming backend sends token and user data in response
      const { token } = response.data;

      // Call login function from UserContext to store user and token
      login(token);

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
      <h1 className="mx-auto mb-3">Sign Up</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form mx-auto mt-3">
        <div className="form-input mx-auto w-25">
          <label htmlFor="name">Name &nbsp;</label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            required
          />
        </div>
        <div className="form-input mx-auto w-25">
          <label htmlFor="email">Email &nbsp;</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            required
          />
        </div>
        <div className="form-input mx-auto w-25">
          <label htmlFor="password">Password &nbsp;</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
        </div>
        <div className="form-input mx-auto w-25">
          <label htmlFor="shippingAddress">Shipping Address &nbsp;</label>
          <input
            name="shippingAddress"
            id="shippingAddress"
            type="text"
            placeholder="Shipping Address"
            value={shippingAddress}
            onChange={(evt) => setShippingAddress(evt.target.value)}
            required
          />
        </div>
        <div className="form-input mx-auto w-25">
          <label htmlFor="phone">Phone &nbsp;</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(evt) => setPhone(evt.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn loginSignupBtn mx-auto">
          Sign Up
        </button>
      </form>
    </div>
  );
}
