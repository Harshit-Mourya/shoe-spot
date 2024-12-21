import  {useState} from "react";
import { useNavigate } from "react-router-dom";


import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export default function Login(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For redirecting after successful login

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const loginData = { email, password };

    try {
      // Send POST request to backend API for login
      const response = await axios.post("/auth/login", loginData);

      // If login is successful, get token and user data
      const { token, userData } = response.data;

      // Save the token to localStorage (for later use in requests)
      localStorage.setItem("token", token);

      // Redirect to another page (for example, dashboard)
      navigate("/");

      console.log("Login successful", userData); // Handle successful login
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      console.error("Login error", error);
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
