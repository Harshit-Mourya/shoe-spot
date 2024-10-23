import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { makeServer } from "./miragejs/mirage.js"; // Import the Mirage server setup

// Start the Mirage server
makeServer();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
