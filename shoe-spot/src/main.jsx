import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/productsContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";

import { makeServer } from "./miragejs/mirage.js"; // Import the Mirage server setup

// Start the Mirage server
makeServer();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <CartProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </CartProvider>
    </ProductsProvider>
  </StrictMode>
);
