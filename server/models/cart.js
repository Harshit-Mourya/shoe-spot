const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Referencing the Product model
    quantity: { type: Number, required: true, min: 1 },
  });
  
  const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Referencing the User model
    items: [cartItemSchema], // Array of products in the cart (each with productId and quantity)
    createdAt: { type: Date, default: Date.now }, // Date when the cart was created
    updatedAt: { type: Date, default: Date.now }, // Date when the cart was last updated
  });

  // Method to calculate the total price dynamically
  cartSchema.methods.calculateTotalPrice = async function () {
    const cart = this; // 'this' refers to the current cart instance
    let total = 0;
  
    // Loop through all items in the cart and calculate the total price
    for (const item of cart.items) {
      const product = await Product.findById(item.productId); // Fetch the product details
      if (product) {
        total += product.price * item.quantity; // Multiply price by quantity
      }
    }
  
    return total; // Return the calculated total price
  };
  
  // Create the Cart model based on the schema
  const Cart = mongoose.model('Cart', cartSchema);
  
  module.exports = Cart;