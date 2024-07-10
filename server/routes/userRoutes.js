// backend/routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the user already exists
        const { rows: userExist } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExist.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);

        // Generate a JWT token
        const token = jwt.sign({ email }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(201).json({ message: 'User registered', token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// User login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user exists
        const { rows: users } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (users.length === 0) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Compare the password
        const user = users[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const { rows: users } = await pool.query('SELECT id, username, email FROM users WHERE id = $1', [req.user.id]);
        if (users.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(users[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update user profile
router.put('/profile', authMiddleware, async (req, res) => {
    const { username, email } = req.body;
    try {
        // Update user information
        await pool.query('UPDATE users SET username = $1, email = $2 WHERE id = $3', [username, email, req.user.id]);

        res.json({ message: 'Profile updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Change password
router.put('/profile/change-password', authMiddleware, async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
        // Get the current user
        const { rows: users } = await pool.query('SELECT password FROM users WHERE id = $1', [req.user.id]);

        // Compare the old password
        const user = users[0];
        const validPassword = await bcrypt.compare(oldPassword, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid old password' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the password
        await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, req.user.id]);

        res.json({ message: 'Password changed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
