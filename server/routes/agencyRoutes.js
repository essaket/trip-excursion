const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register agency
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const [existingAgency] = await db.query('SELECT * FROM Agencies WHERE email = ?', [email]);
        if (existingAgency.length > 0) {
            return res.status(400).json({ msg: 'Agency already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await db.query('INSERT INTO Agencies (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
        res.status(201).json({ msg: 'Agency registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login agency
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const [agency] = await db.query('SELECT * FROM Agencies WHERE email = ?', [email]);
        if (agency.length === 0) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, agency[0].password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const payload = {
            agency: {
                id: agency[0].agency_id
            }
        };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;