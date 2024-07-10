const express = require('express');
const router = express.Router();
const db = require('../config/db');
89
// Create a new trip
router.post('/', async (req, res) => {
    try {
        const { agency_id, title, description, itinerary, price, accommodations, restaurants, activities, number_of_places } = req.body;
        const [result] = await db.query(
            'INSERT INTO Trips (agency_id, title, description, itinerary, price, accommodations, restaurants, activities, number_of_places) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [agency_id, title, description, itinerary, price, accommodations, restaurants, activities, number_of_places]
        );
        res.status(201).json({ msg: 'Trip created successfully', trip_id: result.insertId });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all trips
router.get('/', async (req, res) => {
    try {
        const [trips] = await db.query('SELECT * FROM Trips');
        res.json(trips);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get a specific trip
router.get('/:id', async (req, res) => {
    try {
        const [trip] = await db.query('SELECT * FROM Trips WHERE trip_id = ?', [req.params.id]);
        if (trip.length === 0) {
            return res.status(404).json({ msg: 'Trip not found' });
        }
        res.json(trip[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update a trip
router.put('/:id', async (req, res) => {
    try {
        const { title, description, itinerary, price, accommodations, restaurants, activities, number_of_places } = req.body;
        await db.query(
            'UPDATE Trips SET title = ?, description = ?, itinerary = ?, price = ?, accommodations = ?, restaurants = ?, activities = ?, number_of_places = ? WHERE trip_id = ?',
            [title, description, itinerary, price, accommodations, restaurants, activities, number_of_places, req.params.id]
        );
        res.json({ msg: 'Trip updated successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete a trip
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM Trips WHERE trip_id = ?', [req.params.id]);
        res.json({ msg: 'Trip deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;