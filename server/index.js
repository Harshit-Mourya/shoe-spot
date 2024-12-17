require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/products");
const { ShoeKey, ShoeType } = require("./models/shoes");

main()
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.log(err));

async function main() {
  const dbURL = process.env.MONGOURL;
  await mongoose.connect(dbURL);
}
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "GET, POST, PUT, DELETE",
};
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    const shoeKeys = await ShoeKey.find();
    const shoeTypes = await ShoeType.find();
    // console.log({ products, shoeKeys, shoeTypes });
    // res.send("Hi bro!");
    res.json({ products, shoeKeys, shoeTypes });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Error fetching products", error: err });
  }
});

app.get("/category", async (req, res) => {
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

app.get("/costrange", async (req, res) => {
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

app.get("/all", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.json({ products }); // Send the products as a JSON response
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Error fetching products", error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
