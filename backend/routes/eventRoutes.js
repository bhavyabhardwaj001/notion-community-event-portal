const express = require('express');
const router = express.Router();
const { getEvents, getEventById, createEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

// GET all events
router.get('/', getEvents);

// GET single event by using id
router.get('/:id', getEventById);

// POST create a new event (Protected Admin only)
router.post('/', protect, createEvent);

module.exports = router;
