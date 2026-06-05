const express = require('express');
const router = express.Router();
const { getRegistrations } = require('../controllers/registrationController');
const { loginAdmin } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

router.post('/login', loginAdmin);

router.get('/', protect, getRegistrations);

module.exports = router;
