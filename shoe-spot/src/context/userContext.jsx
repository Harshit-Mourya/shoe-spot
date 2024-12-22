import { createContext, useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

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
      setLoading(false);
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
        console.log(response.data);
        // Store the user data in the state
        setUser(response.data); // Assuming the response contains the user data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data");
        setLoading(false); // Stop loading
      }
    };

    fetchUser();
  }, [authToken]);

  const login = (token, userData) => {
    // Store token in localStorage and update state
    localStorage.setItem("token", token);
    setAuthToken(token);
    setUser(userData); // Store user data
  };

  const logout = () => {
    // Remove token from localStorage and reset state
    console.log("Logged Out");
    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, authToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
