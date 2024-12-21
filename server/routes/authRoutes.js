const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.js"); // Import your User model
const jwt = require("jsonwebtoken"); // For creating JWT tokens
const router = express.Router();

// POST request for user signup
router.post("/signup", async (req, res) => {
    const { name, email, password, shippingAddress, phone } = req.body;
  
    // Check if all fields are provided
    if (!name || !email || !password || !shippingAddress || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    try {
      // Check if the user already exists by email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists." });
      }
  
      // Hash the password before saving to the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the user in the database
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        shippingAddress,
        phone,
      });
  
      // Save the new user
      await newUser.save();
  
      // Generate a JWT token (you can use a secret key from .env for production)
      const token = jwt.sign({ userId: newUser._id }, "your_jwt_secret_key", {
        expiresIn: "1h", // Token expiration time
      });
  
      // Send response with user data and token
      res.status(201).json({
        message: "User registered successfully",
        token,
        userData: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (err) {
      console.error("Error during signup:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// POST request for user login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    // Validate the request body
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password." });
      }

    //   console.log("User found:", user); // Check if the user is found

    // Log the entered password and stored password hash for debugging
    // console.log("Entered password:", password);
    // console.log("Stored hashed password:", user.password);

  
      // Compare the password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return res.status(400).json({ message: "Invalid email or password." });
      }
  
      // Generate a JWT token if authentication is successful
      const token = jwt.sign({ userId: user._id }, "your_jwt_secret_key", {
        expiresIn: "1h", // Token expiration time
      });
  
      // Send response with the token and user data
      res.status(200).json({
        message: "Login successful",
        token,
        userData: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      console.error("Error during login:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  


module.exports = router;
