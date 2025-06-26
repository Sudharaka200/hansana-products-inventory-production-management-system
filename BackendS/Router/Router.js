import express from "express";
import { registerUser, loginUser, fetch } from "../Controller/Controller.js";

const router = express.Router();

router.post("/users/register", registerUser);
router.get("/fetch", fetch);
router.post("/users/login", loginUser);

export default router;