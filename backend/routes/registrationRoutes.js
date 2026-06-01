const express = require('express');
const router = express.Router();
const { registerForEvent, getRegistrations } = require('../controllers/registrationController');

// POST register for an event
router.post('/', registerForEvent);

module.exports = router;
