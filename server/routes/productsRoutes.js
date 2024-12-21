const express = require("express");
const Product = require("../models/products");
const { ShoeKey, ShoeType } = require("../models/shoes");

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    const shoeKeys = await ShoeKey.find();
    const shoeTypes = await ShoeType.find();
    // console.log({ products, shoeKeys, shoeTypes });
    // res.send("Hi bro!");
    res.json({ products, shoeKeys, shoeTypes });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Error fetching products", error: err.message || err });
  }
});

module.exports = router;
