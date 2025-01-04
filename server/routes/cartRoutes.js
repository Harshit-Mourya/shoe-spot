const express = require("express");
const Cart = require("../models/cart.js");
const Product = require("../models/products.js");
const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      "items.productId"
    );
    if (!cart) {
      console.log("Cart not found!");
      return res.status(404).send("Cart not found");
    }
    res.json(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add item to Cart
router.post("/:userId", async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    console.log("In server cartRoutes!", req.body, req.params.userId);
    let cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) {
      // If no cart exists, create a new cart
      cart = new Cart({
        userId: req.params.userId,
        items: [{ productId, quantity }],
      });
      // console.log("inside if ", cart);
    } else {
      // console.log("cart found ", cart);

      // If cart exists, check if item is already in the cart
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );
      if (itemIndex >= 0) {
        // Update quantity if product is already in cart
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new item if not already in cart
        cart.items.push({ productId, quantity });
      }
    }
    console.log("before saving...", cart);
    await cart.save();
    // res.status(200).json(cart);

    // Populate the productId field in the items array
    const populatedCart = await Cart.findById(cart._id).populate(
      "items.productId"
    );

    // Send the response after populating
    res.status(200).json(populatedCart); // Send the populated cart as the response
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Remove item from cart
router.post("/:userId/item", async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from URL
    const { productId } = req.body; // Get productId from request body

    console.log("In remove route...", userId, productId);

    // Find the cart for the given userId
    const cart = await Cart.findOne({ userId: userId });

    if (!cart) {
      console.log("Cart not found!");
      return res.status(404).json({ message: "Cart not found" });
    }
    console.log(cart);

    // Find the item in the cart
    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      console.log("Item not found in cart");
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Decrease the quantity or remove the item entirely
    const item = cart.items[itemIndex];
    if (item.quantity === 1) {
      // If the quantity is 1, remove the item from the cart
      cart.items.splice(itemIndex, 1);
    } else {
      // If quantity is more than 1, decrease the quantity by 1
      cart.items[itemIndex].quantity -= 1;
    }

    // Save the updated cart
    await cart.save();

    // Populate the productId field in the items array
    const populatedCart = await Cart.findById(cart._id).populate(
      "items.productId"
    );

    // Send the response after populating
    res.status(200).json(populatedCart); // Send the populated cart as the response
    // Return the updated cart
    // res.json({ message: "Item removed successfully", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete item from cart
router.delete("/:userId/item", async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from URL
    const { productId } = req.body; // Get productId from request body
    console.log("req body ", req.body);

    // Find the cart for the given userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the item in the cart and remove it
    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Delete the item from the cart completely
    cart.items.splice(itemIndex, 1);

    // Save the updated cart
    await cart.save();

    // Populate the productId field in the items array
    const populatedCart = await Cart.findById(cart._id).populate(
      "items.productId"
    );

    // Send the response after populating
    res.status(200).json(populatedCart); // Send the populated cart as the response

    // Return the updated cart
    // res.json({ message: "Item deleted from cart successfully", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Clear the entire cart (remove all items)
router.delete("/:userId/cart", async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from URL

    // Find the cart for the given userId
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Clear the cart by setting the items array to an empty array
    cart.items = [];

    // Save the updated cart (with no items)
    await cart.save();

    // Return the updated cart (now empty)
    res.json({ message: "Cart cleared successfully", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
