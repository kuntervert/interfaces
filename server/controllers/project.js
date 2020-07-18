// Imports
const Project = require('../models/Project');


// Export controller
module.exports = {
    createProject: async (req, res) => {
        try {

            const project = new Project({
                title: req.body.title,
                users: req.body.userId
            });
            console.log(project)
            await project.save();
            res.status(200).json('Project created');
        } catch (error) {
            res.status(503).json({
                status: error
            });
        }
    },
    getProjects: async (req, res) => {
        try {
            console.log(req.params.id)
            const projects = await Project.find({
                "users": {
                    $elemMatch: {
                        $eq: req.params.id
                    }
                }
            })
            res.status(200).json({
                projects
            });
        } catch (error) {
            res.status(503).json({
                status: error
            });
        }
    },
};