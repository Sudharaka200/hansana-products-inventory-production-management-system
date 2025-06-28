import mongoose from "mongoose";

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


const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required : true,
    },
    description: {
      type: String,
      required : true,
    },
    price: {
      type: Number,
      required : true,
    },
    img1: {
      type: String,
      required : true,
    },
    img2: {
      type: String,
      required : true,
    },
    img3: {
      type: String,
      required : true,
    },
    img4: {
      type: String,
      required : true,
    },
    img5: {
      type: String,
      required : true,
    },
  }
)

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

export { User, Product };
