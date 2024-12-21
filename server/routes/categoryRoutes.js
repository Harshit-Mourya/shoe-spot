const express = require("express");
const Product = require("../models/products");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const category = req.query.category;
      let products;
      if (category === "all") {
        // If the category is 'all', fetch all products
        products = await Product.find();
      } else {
        // Fetch products where category matches the one passed in the query
        products = await Product.find({ category: category });
      }
      res.json({ products }); // Send the products as a JSON response
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Error fetching products", error: err });
    }
  });
  

  module.exports = router;
