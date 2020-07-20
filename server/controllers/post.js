// Imports
const Project = require('../models/Project');
const User = require('../models/User')
const Post = require('../models/Post')

// Export controller
module.exports = {
    createPost: async (req, res) => {
        try {
            console.log("params: ", req.params.id)
            let post = null
            if (req.body.content) {
                post = new Post({
                    title: req.body.title,
                    user: req.body.userId,
                    content: req.body.content,
                    type: req.body.type,
                    projectId: req.params.id,
                    userEmail: req.body.email
                });

            } else if (!req.body.content) {
                post = new Post({
                    title: req.body.title,
                    user: req.body.userId,
                    type: req.body.type,
                    projectId: req.params.id,
                    userEmail: req.body.email

                });
            }
            await post.save();
            res.status(200).json('Post created');
        } catch (error) {
            res.status(503).json({
                status: error
            });
        }
    },
    getPosts: async (req, res) => {
        try {
            console.log(req.params.id)
            const posts = await Post.find({
                projectId: req.params.id
            })
            res.status(200).json({
                posts
            });
        } catch (error) {
            res.status(503).json({
                status: error
            });
        }
    },
    getMyPosts: async (req, res) => {
        try {
            console.log(req.params.id)
            const posts = await Post.find({
                user: req.params.id
            })
            res.status(200).json({
                posts
            });
        } catch (error) {
            res.status(503).json({
                status: error
            });
        }
    },
};