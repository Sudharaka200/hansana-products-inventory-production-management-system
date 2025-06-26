import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Router/Router.js";
import cors from "cors"; // Added for CORS

dotenv.config();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

app.use("/api", userRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error("❌ MONGO_URL is not defined in .env file");
  // eslint-disable-next-line no-undef
  process.exit(1);
}

console.log("Attempting to connect to MongoDB with URL:", MONGO_URL);

mongoose
  .connect(MONGO_URL, { dbName: "hansana_product_DB" })
  .then(() => {
    console.log("✅ Database connected successfully to hansana_product_DB");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message, error.stack);
    // eslint-disable-next-line no-undef
    process.exit(1);
  });

app.get("/", (req, res) => res.send("Server is up!"));