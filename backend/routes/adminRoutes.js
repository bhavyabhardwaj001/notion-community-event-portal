const express = require('express');
const router = express.Router();
const { getRegistrations } = require('../controllers/registrationController');
const { loginAdmin } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

// POST admin login
router.post('/login', loginAdmin);

// GET all registrations (Protected)
router.get('/', protect, getRegistrations);

module.exports = router;
