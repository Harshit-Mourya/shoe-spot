const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user.js"); // Import your User model
const jwt = require("jsonwebtoken"); // For creating JWT tokens
const router = express.Router();

// POST request for user signup
router.post("/signup", async (req, res) => {
  console.log(req.body);
  const { name, email, password, shippingAddress, phone } = req.body;

  // Validate the input fields
  if (!name || !email || !password || !shippingAddress || !phone) {
    console.log("All fields are required");
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user already exists by email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      console.log("Email already exists");
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password before saving the user to the database
    const salt = await bcrypt.genSalt(10); // Generate salt for hashing
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user object
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Store the hashed password
      shippingAddress,
      phone,
    });

    // Save the new user to the database
    console.log(newUser);
    await newUser.save();

    // Generate a JWT token (You can set a longer expiration time if needed)
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // The token expires in 1 hour
    );

    // Respond with the success message and the token
    console.log("User created successfully", token);
    res.status(201).json({
      message: "User created successfully",
      token, // Send the token to the client
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST request for user login
router.post("/login", async (req, res) => {
  console.log("req.body ", req.body);

  const { email, password } = req.body;
  console.log("Email ", email, "Pass ", password);

  // Validate input fields
  if (!email || !password) {
    console.log("Email and password are required");
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Check if the user exists by email
    const user = await User.findOne({ email });
    console.log("User ", user);
    if (!user) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    // Generate a JWT token (you can adjust the expiration time if needed)
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // Secret key for signing the token
      { expiresIn: "1h" } // Token expiration time (1 hour in this case)
    );

    console.log("Login successful", token);
    // Respond with the success message and the token
    res.status(200).json({
      message: "Login successful",
      token, // Send the token to the client
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
