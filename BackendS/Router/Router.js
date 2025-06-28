import express from "express";
import { registerUser, loginUser, fetch, createProduct, getAllProducts, getProductById, saveCart, getAllCarts, createOrder, createAdmin } from "../Controller/Controller.js";

const router = express.Router();
//user
router.post("/users/register", registerUser);
router.get("/fetch", fetch);
router.post("/users/login", loginUser);
//product
router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
//order
router.post("/cart", saveCart);
router.get("/cart", getAllCarts);
router.post('/orders', createOrder);
//admin
router.post("/admin", createAdmin);





export default router;