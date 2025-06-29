import express from "express";
import { registerUser, loginUser, createProduct, getAllProducts, getProductById, saveCart, getAllCarts, createOrder, createAdmin, loginAdmin, getAllOrders, getPendingOrders, updateOrderStatus, failOrder, getSuccessfailOrders, updateProduct, deleteProduct } from "../Controller/Controller.js";

const router = express.Router();
//user
router.post("/users/register", registerUser);
router.get("/fetch", fetch);
router.post("/users/login", loginUser);
//product
router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.put('/products/:id', updateProduct);
router.delete("/:id", deleteProduct);
//order
router.post("/cart", saveCart);
router.get("/cart", getAllCarts);
router.post('/orders', createOrder);
//admin
router.post("/admin", createAdmin);
router.post('/login', loginAdmin);
//ref
router.get("/orders", getAllOrders);
//Truck
router.get("/pending", getPendingOrders);
router.put("/orders/status/:id", updateOrderStatus);
router.put("/fail/:id", failOrder);
router.get("/successfailOrders", getSuccessfailOrders);








export default router;