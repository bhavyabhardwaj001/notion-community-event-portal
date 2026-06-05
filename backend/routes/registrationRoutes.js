const express = require('express');
const router = express.Router();
const { registerForEvent, getRegistrations } = require('../controllers/registrationController');

router.post('/', registerForEvent);

module.exports = router;
