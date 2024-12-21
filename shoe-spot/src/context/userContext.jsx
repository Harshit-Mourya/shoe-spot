import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
// User state to store authentication info
const [user, setUser] = useState(null); // Holds the user details
const [authToken, setAuthToken] = useState(localStorage.getItem("token") || null);

useEffect(() => {
  // On page load, check if the user is authenticated by the token in localStorage
  if (authToken) {
    // Optionally, fetch user details from backend based on token
    // setUser(fetchedUserData);
  }
}, [authToken]);

const login = (token, userData) => {
  // Store token in localStorage and update state
  localStorage.setItem("token", token);
  setAuthToken(token);
  setUser(userData); // Store user data
};

const logout = () => {
  // Remove token from localStorage and reset state
  localStorage.removeItem("token");
  setAuthToken(null);
  setUser(null);
};

const value = useMemo(()=>({
    user, authToken, login, logout
}))

return (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
);
};