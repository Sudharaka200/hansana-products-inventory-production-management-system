import User from "../Model/Model.js";
import bcrypt from "bcrypt";

//create user account
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

//Login User
export const loginUser = async (req, res) => {
  try {
    console.log("Received login request:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("Validation failed: Missing email or password");
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found with email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password for email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("User logged in successfully:", email);
    res.status(200).json({ message: "Login successful", user: { email, phonenumber: user.phonenumber, _id: user._id } });
  } catch (error) {
    console.error("❌ Login error:", error.message, error.stack);
    res.status(500).json({ message: "Failed to login user", error: error.message });
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