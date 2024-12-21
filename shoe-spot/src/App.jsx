import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/HomePage/Home.jsx";
import ShoeInfo from "./components/HomePage/ShoeInfo.jsx";
import NotFound from "./components/NotFound.jsx";
import Signup from "./components/LoginSignup/Signup.jsx";
import Login from "./components/LoginSignup/Login.jsx";


function App() {
  // const [products, setProducts] = useState([]);
  // const [shoeKeys, setShoeKeys] = useState([]);
  // const [shoeTypes, setShoeTypes] = useState({});

  // const [error, setError] = useState(null);

  // const filterProducts = async (filter = "all", cost) => {
  //   try {
  //     const response = await axios.get(`/api/${filter.toLowerCase()}`, {
  //       params: { cost },
  //     });
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     setError("Failed to fetch products. Please try again.");
  //   }
  // };
  // const filterProductsByCategory = async (category = "all") => {
  //   try {
  //     const response = await axios.get(`/api/category`, {
  //       params: { category },
  //     });
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     setError("Failed to fetch products. Please try again.");
  //   }
  // };

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("/api/initialFetch");
  //       console.log(response.data);
  //       const { products, shoeKeys, shoeTypes } = response.data;
  //       setProducts(products);
  //       setShoeKeys(shoeKeys);
  //       setShoeTypes(shoeTypes);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // const [fruits, setFruits] = useState([]);

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:8080/api ");
  //   setFruits(response.data.fruits);
  //   console.log(response.data.fruits);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/");
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ShoeInfo />} />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
