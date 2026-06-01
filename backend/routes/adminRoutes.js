const express = require('express');
const router = express.Router();
const { getRegistrations } = require('../controllers/registrationController');

// GET all registrations (We will protect this later with admin middleware)
router.get('/', getRegistrations);

module.exports = router;
