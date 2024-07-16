// backend/routes/userRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// User registration
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const [existingUsers] = await pool.query(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user
    const [result] = await pool.query(
      "INSERT INTO Users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    // Generate JWT token
    const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// User login
router.post("/login", async (req, res) => {
  console.log("Login attempt received:", req.body);
  try {
    const { email, password } = req.body;

    // Check if user exists
    const [users] = await pool.query("SELECT * FROM Users WHERE email = ?", [
      email,
    ]);
    console.log("User found:", users);

    if (users.length === 0) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const user = users[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Sending response:", { token });
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const [users] = await pool.query(
      "SELECT id, username, email FROM Users WHERE id = ?",
      [req.user.id]
    );
    if (users.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(users[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update user profile
router.put("/profile", authMiddleware, async (req, res) => {
  const { username, email } = req.body;
  try {
    // Update user information
    await pool.query("UPDATE Users SET username = ?, email = ? WHERE id = ?", [
      username,
      email,
      req.user.id,
    ]);

    res.json({ message: "Profile updated" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Change password
router.put("/profile/change-password", authMiddleware, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  try {
    // Get the current user
    const [users] = await pool.query(
      "SELECT password FROM Users WHERE id = ?",
      [req.user.id]
    );

    // Compare the old password
    const user = users[0];
    const validPassword = await bcrypt.compare(oldPassword, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid old password" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the password
    await pool.query("UPDATE Users SET password = ? WHERE id = ?", [
      hashedPassword,
      req.user.id,
    ]);

    res.json({ message: "Password changed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
