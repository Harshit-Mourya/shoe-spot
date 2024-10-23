import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/HomePage/Home.jsx";
import Sports from "./components/Sports.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`/api/${category.toLowerCase()}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again.");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  // const [fruits, setFruits] = useState([]);

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:8080/api ");
  //   setFruits(response.data.fruits);
  //   console.log(response.data.fruits);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  return (
    <Router>
      <Navbar fetchProductsByCategory={fetchProductsByCategory} />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="/sports"
          element={<Sports fetchProductsByCategory={fetchProductsByCategory} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
