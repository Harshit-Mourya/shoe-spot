const express = require("express");
const router = express.Router();
const Order = require("../models/order.js");
const User = require("../models/user.js");
const isLoggedIn = require("../middlewares/isLoggedIn.js");

router.use(isLoggedIn);

// Get orders for the logged-in user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);

    const orders = await Order.findOne({ userId }).populate({
      path: "items.productId", // Populate productId inside items array
      select: "title imgSrc", // Select only the fields you need (title and imgSrc)
    }); // Fetch orders for the authenticated user

    console.log(orders);

    if (!orders) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.status(200).json(orders); // Send the orders back
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// POST: Create or update an order for the user
router.post("/:userId", async (req, res) => {
  const { userId } = req.params; // Get the userId from URL parameters
  const { sendItems } = req.body; // Get order data from request body

  console.log(userId, sendItems);

  // Ensure the necessary data is provided
  if (!sendItems) {
    return res.status(400).json({ message: "Items are required" });
  }

  try {
    // Optionally: You can verify that the userId from the token matches the userId in the URL
    // if (req.user.id !== userId) {
    //   console.log(req.user.id);
    //   return res.status(403).json({
    //     message: "User not authorized to place orders for another user",
    //   });
    // }

    // Retrieve the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get shipping address from the user object
    const shippingAddress = user.shippingAddress;
    if (!shippingAddress) {
      return res
        .status(400)
        .json({ message: "Shipping address not found for user" });
    }

    // Check if the user already has an order
    const existingOrder = await Order.findOne({ userId });

    if (existingOrder) {
      // If order exists, we need to update the order with the new items

      // Loop through the new items to see if they already exist in the order
      sendItems.forEach((newItem) => {
        // Check if this item already exists in the order by productId
        const existingItemIndex = existingOrder.items.findIndex(
          (item) => item.productId.toString() === newItem.productId.toString()
        );

        if (existingItemIndex !== -1) {
          // If the item exists, update its quantity
          existingOrder.items[existingItemIndex].quantity += newItem.quantity;
        } else {
          // If the item does not exist, add it to the order
          existingOrder.items.push(newItem);
        }
      });
      existingOrder.shippingAddress = shippingAddress;

      await existingOrder.save();

      return res
        .status(200)
        .json({ message: "Order updated successfully", orders: existingOrder });
    } else {
      // If no order exists, create a new order
      const totalPrice = 0;
      const newOrder = new Order({
        userId,
        items: sendItems,
        shippingAddress: shippingAddress,
        totalPrice,
      });

      await newOrder.save(); // Save the new order
      return res
        .status(201)
        .json({ message: "Order created successfully", orders: newOrder });
    }
  } catch (error) {
    console.error("Error creating or updating order:", error);
    res.status(500).json({ message: "Failed to create or update order" });
  }
});

// DELETE: Delete a specific order by its orderId for a specific user
router.delete("/:userId", async (req, res) => {
  const { userId } = req.params; // Get userId and orderId from the URL parameters
  const { orderId } = req.body;
  console.log("orderId ", orderId);
  try {
    // Find the order by userId and orderId and delete it
    const order = await Order.findOneAndDelete({
      _id: orderId,
      userId: userId,
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully", orders: {} });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Failed to delete order" });
  }
});

module.exports = router;
