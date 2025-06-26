import User from "../Model/Model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    console.log("Received registration request:", req.body);
    const { email, phonenumber, password } = req.body;

    if (!email || !phonenumber || !password) {
      console.log("Validation failed: Missing fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists with email:", email);
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, phonenumber, password: hashedPassword });

    await newUser.save();
    console.log("User saved successfully:", email);

    res.status(201).json({ message: "User registered successfully", user: { email, phonenumber, _id: newUser._id } });
  } catch (error) {
    console.error("❌ Register error:", error.message, error.stack);
    res.status(500).json({ message: "Failed to register user", error: error.message });
  }
};

export const fetch = async (req, res) => {
  try {
    res.json("Hello World");
  } catch (error) {
    console.error("❌ Fetch error:", error.message, error.stack);
    res.status(500).json({ message: "Failed to fetch", error: error.message });
  }
};