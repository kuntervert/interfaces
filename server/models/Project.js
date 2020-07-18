// Imports
const mongoose = require('../database');
const shortid = require('shortid');


// Define schema
const projectSchema = mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    title: {
        type: String,
        required: true,
        minLength: 1
    },
    users: [{
        type: String,
        required: true,
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});


//User model
const Project = mongoose.model('Project', projectSchema);
// Export model
module.exports = Project;