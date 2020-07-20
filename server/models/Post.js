// Imports
const mongoose = require('../database');
const shortid = require('shortid');

// Define schema
const postSchema = mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    projectId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        minLength: 1
    },
    user: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
    },
    comments: [{
        type: Object
    }],
    content: {
        type: String
    },
    type: {
        type: String,
        required: true
    }
});


//User model
const Post = mongoose.model('Post', postSchema);
// Export model
module.exports = Post;