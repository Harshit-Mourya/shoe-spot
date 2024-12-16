const mongoose = require("mongoose");
const { products, shoeKeys, shoeTypes } = require("./data.js");

const Product = require("../models/products.js");
const { ShoeKey, ShoeType } = require("../models/shoes.js");

main()
  .then(() => {
    console.log("Connection Successful!");
    initDB(); // Initialize the database after successful connection
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shoespot");
}

const initDB = async () => {
  try {
    await Product.deleteMany({});
    await ShoeKey.deleteMany({});
    await ShoeType.deleteMany({});
    console.log("Old data deleted!");
    await Product.insertMany(products);
    console.log("Product data initialized!");
    for (const key of shoeKeys) {
      const shoeKey = new ShoeKey({ name: key });
      await shoeKey.save();
      // console.log(`ShoeKey '${key}' saved.`);

      const shoeTypeNames = shoeTypes[key];
      for (const shoeTypeName of shoeTypeNames) {
        const shoeType = new ShoeType({
          name: shoeTypeName,
          shoeKey: shoeKey._id, // Link to the parent ShoeKey
        });
        await shoeType.save();
        //   console.log(`ShoeType '${shoeTypeName}' for '${key}' saved.`);
      }
    }
    console.log("Shoe data initialized!");
    console.log("Data initialized successfully!");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};
