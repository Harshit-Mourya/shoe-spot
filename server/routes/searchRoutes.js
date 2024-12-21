const express = require("express");
const Product = require("../models/products");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const  searchTerm  = req.query.searchTerm;
      if (!searchTerm) {
        const products = await Product.find(); // Fetch all products from the database
     return res.json({ products });
      }
      const lowerSearchTerm = searchTerm.toLowerCase();
      const products = await Product.find({
        $or: [
          { title: { $regex: lowerSearchTerm, $options: 'i' } }, // Case-insensitive regex match
          // { description: { $regex: lowerSearchTerm, $options: 'i' } },
          { category: { $regex: lowerSearchTerm, $options: 'i' } }
        ]
      });
  
    
      res.json({ products });    // Send the products as a JSON response
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Error fetching products", error: err });
    }
  });

module.exports = router;
