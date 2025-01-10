const jwt = require("jsonwebtoken"); // Require JWT library

const isLoggedIn = (req, res, next) => {
  console.log("in isLoggedIn");
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    // If there is no token, send a 401 Unauthorized response
    return res
      .status(401)
      .json({ message: "You must be logged in to access this route" });
  }

  try {
    // Try to verify the token (check if it's valid)
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret key here
    req.user = decoded; // Attach the decoded user info to the request object (you can access it in the next middleware or route)
    next(); // If valid, move to the next middleware or route
  } catch (err) {
    // If token is invalid or expired, send a 401 Unauthorized response
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = isLoggedIn;
