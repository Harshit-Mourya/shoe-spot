const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: {
    type: String,
    required: true,
  },
  imgSrc: { type: String, required: true }, // URL to the image

  sizes: [{ type: Number }], // Available shoe sizes

  stock: { type: Number, default: 0 }, // Available stock
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
