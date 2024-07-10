// backend/routes/bookingsRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Create a new booking
router.post('/', async (req, res) => {
    try {
        const { user_id, trip_id, number_of_people, total_price } = req.body;
        const [result] = await db.query(
            'INSERT INTO Bookings (user_id, trip_id, number_of_people, total_price) VALUES (?, ?, ?, ?)',
            [user_id, trip_id, number_of_people, total_price]
        );
        res.status(201).json({ msg: 'Booking created successfully', booking_id: result.insertId });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all bookings for a user
router.get('/user/:userId', async (req, res) => {
    try {
        const [bookings] = await db.query('SELECT * FROM Bookings WHERE user_id = ?', [req.params.userId]);
        res.json(bookings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get a specific booking
router.get('/:id', async (req, res) => {
    try {
        const [booking] = await db.query('SELECT * FROM Bookings WHERE booking_id = ?', [req.params.id]);
        if (booking.length === 0) {
            return res.status(404).json({ msg: 'Booking not found' });
        }
        res.json(booking[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update a booking
router.put('/:id', async (req, res) => {
    try {
        const { number_of_people, total_price } = req.body;
        await db.query(
            'UPDATE Bookings SET number_of_people = ?, total_price = ? WHERE booking_id = ?',
            [number_of_people, total_price, req.params.id]
        );
        res.json({ msg: 'Booking updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM Bookings WHERE booking_id = ?', [req.params.id]);
        res.json({ msg: 'Booking deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
