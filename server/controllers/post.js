// Imports
const Project = require('../models/Project');
const User = require('../models/User')
const Post = require('../models/Post')
const moment = require('moment-timezone');

// Export controller
module.exports = {
    createPost: async (req, res) => {
        try {
            let currDate = moment().tz("Europe/Helsinki").format(
                "DD MMMM YYYY, HH:mm"
            )
            console.log(currDate)
            let post = null
            if (req.body.content) {
                post = new Post({
                    title: req.body.title,
                    user: req.body.userId,
                    content: req.body.content,
                    type: req.body.type,
                    projectId: req.params.id,
                    username: req.body.username,
                    createdAt: currDate


                });

            } else if (!req.body.content) {
                post = new Post({
                    title: req.body.title,
                    user: req.body.userId,
                    type: req.body.type,
                    projectId: req.params.id,
                    username: req.body.username,
                    createdAt: currDate

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
    getPost: async (req, res) => {
        try {
            const posts = await Post.find({
                _id: req.params.id
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
    createComment: async (req, res) => {
        try {
            let currDate = moment().tz("Europe/Helsinki").format(
                "DD MMMM YYYY, HH:mm"
            )
            let newComment = {
                userId: req.body.userId,
                username: req.body.username,
                content: req.body.content,
                createdAt: currDate
            }
            let comment = await Post.findByIdAndUpdate(req.params.id, {
                $push: {
                    comments: newComment
                }
            })
            await comment.save()
            res.status(200).json("Comment added")
        } catch (error) {
            console.log(error)
            res.status(503).json({
                status: error
            })
        }
    }
};