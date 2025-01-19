import { createContext, useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://shoe-spot-backend.onrender.com";

import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User state to store authentication info
  const [user, setUser] = useState(null); // Holds the user details
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || null
  );

  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To store error messages

  useEffect(() => {
    // On page load, check if the user is authenticated by the token in localStorage
    if (!authToken) {
      console.log("No authToken found!");
      setLoading(false);
      return;
    }

    // Decode and check if the token has expired
    try {
      const decoded = jwtDecode(authToken);
      const currentTime = Date.now() / 1000; // Get current time in seconds

      if (decoded.exp < currentTime) {
        // Token has expired
        console.log("token expired");
        localStorage.removeItem("token"); // Remove expired token
        localStorage.removeItem("userId");
        setAuthToken(null); // Reset authToken state
        setUser(null); // Reset user state
        setLoading(false); // Stop loading
        window.location.href = "/"; // Optionally redirect to login
        return; // Prevent further execution
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      setLoading(false); // Stop loading if there's an error decoding the token
      return;
    }

    console.log("Token found ", authToken);

    const fetchUser = async () => {
      try {
        const response = await axios.get("/user", {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include token for authentication
          },
        });
        console.log("Inside useEffect : ", response.data);
        // Store the user data in the state
        const gotUser = response.data;
        setUser(gotUser); // Assuming the response contains the user data
        console.log("Setting userData in useEffect", gotUser);

        localStorage.setItem("userId", gotUser._id);

        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data");
        setLoading(false); // Stop loading
      }
    };

    fetchUser();
  }, [authToken]);

  const login = (token) => {
    setLoading(true);
    // Store token in localStorage and update state
    localStorage.setItem("token", token);
    setAuthToken(token);
    setLoading(false);

    // console.log("Seeting userData in login()");
    // setUser(userData); // Store user data
  };

  const logout = () => {
    setLoading(true);

    // Remove token from localStorage and reset state
    console.log("Logged Out");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setAuthToken(null);
    setUser(null);
    setLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, authToken, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
