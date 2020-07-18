// Imports
const express = require('express');
const userController = require('../controllers/user');
const projectController = require('../controllers/project')


// Create new Express router
const router = express.Router();

// Endpoints
router.post('/login', userController.loginUser);
router.post('/signup', userController.createUser);
router.post('/new-project', projectController.createProject)
router.get('/get-projects/:id', projectController.getProjects)


// Export router
module.exports = router;