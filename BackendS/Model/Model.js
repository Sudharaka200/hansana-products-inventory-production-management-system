import mongoose from "mongoose";

// USER SCHEMA
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "users" }
);

// PRODUCT SCHEMA
const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img1: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    img3: {
      type: String,
      required: true,
    },
    img4: {
      type: String,
      required: true,
    },
    img5: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "products" }
);

// CART ITEM SCHEMA (used inside Cart)
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  productname: String,
  img1: String,
  price: Number,
  quantity: Number,
});


const orderSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    streetaddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    cartItems: [cartItemSchema], // Embedding cart items here
  },
  {
    timestamps: true,
    collection: "orders", // Use "orders" unless you're storing this in the "products" collection intentionally
  }
);

// MAIN CART SCHEMA
const cartSchema = new mongoose.Schema(
  {
    items: [cartItemSchema],
    subtotal: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "cart" }
);

// MODEL EXPORTS
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const Cart = mongoose.model("Cart", cartSchema);
const Order = mongoose.model("Order", orderSchema)

export { User, Product, Cart, Order };
