const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./products.js");
const isLoggedIn = require("../middlewares/isLoggedIn.js");
const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true }, // Referencing the Product model
  quantity: { type: Number, required: true, min: 1 },
});

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Referencing the User model
  items: [cartItemSchema], // Array of products in the cart (each with productId and quantity)
  createdAt: { type: Date, default: Date.now }, // Date when the cart was created
  updatedAt: { type: Date, default: Date.now }, // Date when the cart was last updated
  totalPrice: { type: Number, default: 0 }, // The total price of the cart, calculated every time the cart is updated
});

// Method to calculate the total price dynamically
cartSchema.methods.calculateTotalPrice = async function () {
  const cart = this; // 'this' refers to the current cart instance
  let total = 0;

  // Extract product IDs from the cart items
  const productIds = cart.items.map((item) => item.productId);

  // Fetch all products at once using the product IDs
  const products = await Product.find({ _id: { $in: productIds } });

  // Create a map of products for quick lookup by productId
  const productMap = products.reduce((map, product) => {
    map[product._id.toString()] = product;
    return map;
  }, {});

  // Calculate the total price
  for (const item of cart.items) {
    const product = productMap[item.productId.toString()];
    if (product) {
      total += product.price * item.quantity;
    }
  }

  return total; // Return the calculated total price
};

// Middleware to calculate totalPrice before saving the cart
cartSchema.pre("save", async function (next) {
  try {
    const cart = this;

    // Calculate the total price using the method
    const totalPrice = await cart.calculateTotalPrice();

    // Set the totalPrice field
    cart.totalPrice = totalPrice;

    // Proceed to save the cart
    next();
  } catch (error) {
    next(error);
  }
});

// Create the Cart model based on the schema
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
