const express = require("express");
const Product = require("../models/products");

const router = express.Router();




router.get("/", async (req, res) => {
    try {
      const { costrange, shoeCategory } = req.query;
      let minCost = 0;
      let maxCost = Infinity;
  
      // If cost is provided as an array, parse it
      if (costrange) {
        // Parse the cost array (expecting something like cost=[100,200])
        const costArray = JSON.parse(costrange); // This will parse the array passed in the query
  
        if (Array.isArray(costArray) && costArray.length === 2) {
          minCost = parseFloat(costArray[0]);
          maxCost = parseFloat(costArray[1]);
  
          // Validate the cost values
          if (isNaN(minCost) || isNaN(maxCost)) {
            return res.status(400).json({ error: "Invalid cost range values!" });
          }
        } else {
          return res.status(400).json({
            error:
              "Cost range must be an array with two numbers, e.g., [100,200]",
          });
        }
      }
  
      // Construct a query to filter products by category and price range
      let query = {};
  
      // If the shoeCategory is provided and is not 'all', filter by category
      if (shoeCategory !== "all") {
        query.category = shoeCategory;
      }
  
      // Add price range filter (using $gte and $lte for MongoDB)
      query.price = { $gte: minCost, $lte: maxCost };
  
      // Fetch products that match the query criteria
      const products = await Product.find(query);
  
      res.json({ products });
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Error fetching products", error: err });
    }
  });
  

  module.exports = router;
