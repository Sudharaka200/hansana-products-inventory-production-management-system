import {User, Product, Cart, Order, Admin} from "../Model/Model.js";
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

// Create Product
export const createProduct = async (req, res) => {
  try {
    const {
      productname,description,price,img1,img2,img3,img4,img5,
    } = req.body;

    const newProduct = new Product({
      productname,description,price,img1,img2,img3,img4,img5,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Destructure fields from request body
    const {
      productname,
      description,
      price,
      img1,
      img2,
      img3,
      img4,
      img5,
    } = req.body;

    // Find and update product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        productname,
        description,
        price,
        img1,
        img2,
        img3,
        img4,
        img5,
      },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//add products to cart
export const saveCart = async (req, res) => {
  try {
    const { items, subtotal } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ message: "Cart is empty or invalid items format" });
    }

    if (typeof subtotal !== "number" || subtotal < 0) {
      return res
        .status(400)
        .json({ message: "Subtotal is required and must be a positive number" });
    }

    const cart = new Cart({
      items: items.map((item) => ({
        productId: item._id, // only if available
        productname: item.productname,
        img1: item.img1,
        price: item.price,
        quantity: item.quantity,
      })),
      subtotal,
    });

    const savedCart = await cart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    console.error("Save cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//display cart details
export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    console.error("Error fetching carts:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

//Order details
export const createOrder = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      streetaddress,
      city,
      province,
      zipcode,
      cartItems,
    } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: 'Cart items cannot be empty' });
    }

    const newOrder = new Order({
      firstname,
      lastname,
      email,
      streetaddress,
      city,
      province,
      zipcode,
      cartItems,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    console.error('Order creation error:', err);
    res.status(500).json({ error: 'Server error while creating order' });
  }
};

//Create admin
export const createAdmin = async(req, res) => {
  try{
    const {
      email, password, role
    } = req.body;

    const newAdmin = Admin({
      email, password, role
    });

    await newAdmin.save();
    res.status(201).json({message: "Admin Created Succesfully", admin: newAdmin});
  }catch(error){
    console.error("Error Create New Admin", error);
    res.status(500).json({message:"Server Error"});
  }
}

// POST /api/admin/login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    if (admin.password !== password) {
      return res.status(401).json({ success: false, message: 'Incorrect password' });
    }

    // Successful login
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
}

// Get all pending orders
export const getPendingOrders = async (req, res) => {
  try {
    const pendingOrders = await Order.find({ status: "Pending" }).sort({ createdAt: -1 });
    res.status(200).json(pendingOrders);
  } catch (error) {
    console.error("Error fetching pending orders:", error);
    res.status(500).json({ message: "Server error fetching pending orders" });
  }
};

//Get all success and fail orders
export const getSuccessfailOrders = async (req, res) => {
  try {
    const successfailOrders = await Order.find({
      $or: [
        { status: "Success" },
        { status: "Fail" }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json(successfailOrders);
  } catch (error) {
    console.error("Error fetching success/fail orders:", error);
    res.status(500).json({ message: "Server error fetching success/fail orders" });
  }
};

//status update success
export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status: "Success" },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order status updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update order status to 'Fail'
export const failOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    // Find order by ID and update the status
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "Fail" },
      { new: true } // return updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order status updated to Fail",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Server error" });
  }
};