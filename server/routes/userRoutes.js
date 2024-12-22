const express = require("express");
const User = require("../models/user"); // Assuming you have a User model
const authenticateToken = require("../middlewares/authenticateToken.js"); // Import the authenticate middleware
const router = express.Router();

// Get the logged-in user's details
router.get("/", authenticateToken, async (req, res) => {
  try {
    // Assuming `req.user.id` contains the ID of the logged-in user
    console.log(req.user);

    const user = await User.findById(req.user.userId).select("-password"); // Exclude password
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Send back user data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
