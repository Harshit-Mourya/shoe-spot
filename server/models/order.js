const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// Method to calculate the total price dynamically
orderSchema.methods.calculateTotalPrice = async function () {
  console.log("inside total function");
  const order = this;
  let total = 0;

  // Calculate the total price by multiplying the price and quantity of each item
  for (const item of order.items) {
    total += item.price * item.quantity; // Multiply item price by quantity
  }

  return total; // Return the calculated total price
};

// Middleware to calculate totalPrice before saving the order
orderSchema.pre("save", async function (next) {
  try {
    const order = this;

    // Calculate the total price using the method
    const totalPrice = await order.calculateTotalPrice();
    console.log(totalPrice);

    // Set the totalPrice field
    order.totalPrice = totalPrice;

    // Proceed to save the order
    next();
  } catch (error) {
    next(error);
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
