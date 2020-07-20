// Imports
const express = require('express');
const userController = require('../controllers/user');
const projectController = require('../controllers/project')
const postController = require('../controllers/post')


// Create new Express router
const router = express.Router();

// Endpoints
// User
router.post('/login', userController.loginUser);
router.post('/signup', userController.createUser);
//Project
router.post('/new-project', projectController.createProject)
router.get('/get-projects/:id', projectController.getProjects)
router.post('/share-project/', projectController.shareProject)
//Post
router.post('/new-post/:id', postController.createPost)
router.get('/get-posts/:id', postController.getPosts)
router.get('/get-post/:id', postController.getPost)
router.get('/get-my-posts/:id', postController.getMyPosts)
router.post('/new-comment/:id', postController.createComment)


// Export router
module.exports = router;