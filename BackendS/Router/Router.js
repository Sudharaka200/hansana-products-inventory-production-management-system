import express from "express";
import { registerUser, loginUser, fetch, createProduct, getAllProducts, getProductById, saveCart, getAllCarts } from "../Controller/Controller.js";

const router = express.Router();

router.post("/users/register", registerUser);
router.get("/fetch", fetch);
router.post("/users/login", loginUser);

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

router.post("/cart", saveCart);
router.get("/cart", getAllCarts);




export default router;