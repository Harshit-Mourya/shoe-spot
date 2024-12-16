const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

main()
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURL);
}
const app = express();
const PORT = process.env.PORT || 8080;

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send({ fruits: ["apple", "mango", "banana", "orange"] });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
