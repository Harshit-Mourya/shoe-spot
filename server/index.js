const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "mango", "banana", "orange"] });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
