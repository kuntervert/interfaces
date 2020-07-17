// Imports
const express = require('express');
const controller = require('../controllers/user');

// Create new Express router
const router = express.Router();

// Endpoints
router.post('/login', controller.loginUser);
router.post('/signup', controller.createUser);


// Export router
module.exports = router;