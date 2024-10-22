import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Sports from "./components/Sports.jsx";
import NotFound from "./components/NotFound.jsx";

import Sneakers from "./components/categories/Sneakers.jsx";
import DerbyShoes from "./components/categories/DerbyShoes.jsx";
import Loafers from "./components/categories/Loafers.jsx";
import Mojaris from "./components/categories/Mojaris.jsx";
import Oxfords from "./components/categories/Oxfords.jsx";
import Sandals from "./components/categories/Sandals.jsx";
import Slides from "./components/categories/Slides.jsx";

function App() {
  const [fruits, setFruits] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api ");
    setFruits(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/loafers" element={<Loafers />} />
        <Route path="/derby-shoes" element={<DerbyShoes />} />
        <Route path="/mojaris" element={<Mojaris />} />
        <Route path="/sandals" element={<Sandals />} />
        <Route path="/oxfords" element={<Oxfords />} />
        <Route path="/slides" element={<Slides />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
