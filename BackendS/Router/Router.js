import express from "express";
import { registerUser, fetch } from "../Controller/Controller.js";

const router = express.Router();

router.post("/users/register", registerUser);
router.get("/fetch", fetch);

export default router;