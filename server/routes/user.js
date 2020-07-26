// Imports
const express = require('express');
const userController = require('../controllers/user');
const projectController = require('../controllers/project')
const postController = require('../controllers/post')
const projectAccess = require('../middleware/projectAccess')
const verifyToken = require("../middleware/token");

// Create new Express router
const router = express.Router();

// Endpoints
// User
router.post('/login', userController.loginUser);
router.post('/signup', userController.createUser);
//Project
router.post('/new-project', verifyToken, projectController.createProject)
router.get('/get-projects/:id', verifyToken, projectController.getProjects)
router.post('/share-project/', verifyToken, projectController.shareProject)
//Post
router.post('/new-post/:id', verifyToken, projectAccess, postController.createPost)
router.get('/get-posts/:id', verifyToken, projectAccess, postController.getPosts)
router.get('/get-post/:id', verifyToken, postController.getPost)
router.get('/get-my-posts/:id', verifyToken, postController.getMyPosts)
router.post('/new-comment/:id', verifyToken, postController.createComment)


// Export router
module.exports = router;