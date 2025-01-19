require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const productRoutes = require("./routes/productsRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
const costRangeRoutes = require("./routes/costRangeRoutes.js");
const searchRoutes = require("./routes/searchRoutes.js");
const allRoutes = require("./routes/allRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const orderRoutes = require("./routes/ordersRoutes.js");

main()
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.log(err));

async function main() {
  const dbURL = process.env.MONGOURL;
  await mongoose.connect(dbURL);
}
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: ["https://shoe-spot.onrender.com"],
  methods: "GET, POST, PUT, DELETE",
};
app.use(cors(corsOptions));

app.use("/", productRoutes);
app.use("/category", categoryRoutes);
app.use("/costrange", costRangeRoutes);
app.use("/search", searchRoutes);
app.use("/all", allRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
