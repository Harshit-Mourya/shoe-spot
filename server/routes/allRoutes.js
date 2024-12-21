const express = require("express");
const Product = require("../models/products");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const products = await Product.find(); // Fetch all products from the database
      res.json({ products }); // Send the products as a JSON response
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Error fetching products", error: err });
    }
  });

module.exports = router;
