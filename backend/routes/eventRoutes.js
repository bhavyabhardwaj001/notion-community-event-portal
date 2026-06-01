const express = require('express');
const router = express.Router();
const { getEvents, getEventById, createEvent } = require('../controllers/eventController');

// GET all events
router.get('/', getEvents);

// GET single event by id
router.get('/:id', getEventById);

// POST create a new event (We will protect this later with admin middleware)
router.post('/', createEvent);

module.exports = router;
