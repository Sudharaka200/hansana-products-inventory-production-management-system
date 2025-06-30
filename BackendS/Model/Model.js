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
const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true }, // or ref to User
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

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
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    img5: { type: String, required: true },

    reviews: [reviewSchema],
  },
  { timestamps: true, collection: 'products' }
);


const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  productname: String,
  img1: String,
  price: Number,
  quantity: Number,
});

const orderSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    status: { type: String, default: "Pending" },
    cartItems: [cartItemSchema],
  },
  { timestamps: true, collection: "orders" }
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

//admin Login
const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    }
  },
  { timestamps: true, collection: "admin" }
)

// MODEL EXPORTS
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const Cart = mongoose.model("Cart", cartSchema);
const Order = mongoose.model("Order", orderSchema)
const Admin = mongoose.model("Admin", adminSchema);

export { User, Product, Cart, Order, Admin };
