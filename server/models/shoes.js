const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoeKeySchema = new Schema({
  name: { type: String, required: true },
});

const shoeTypeSchema = new Schema({
  name: { type: String, required: true }, // Shoe type name like "Sneakers", "Loafers"
  shoeKey: { type: Schema.Types.ObjectId, ref: "ShoeKey", required: true }, // Reference to the ShoeKey
});

// Create the model from the schema
const ShoeType = mongoose.model("ShoeType", shoeTypeSchema);

const ShoeKey = mongoose.model("ShoeKey", shoeKeySchema);

module.exports = { ShoeKey, ShoeType };
