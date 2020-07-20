// Imports
const Project = require('../models/Project');
const User = require('../models/User')


// Export controller
module.exports = {
    createProject: async (req, res) => {
        try {

            const project = new Project({
                title: req.body.title,
                users: req.body.userId
            });
            if (await User.findOne({
                    _id: req.body.userId
                })) {
                await User.updateOne({
                    _id: req.body.userId
                }, {
                    $push: {
                        projects: project
                    }
                })
            }


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
    shareProject: async (req, res) => {
        try {
            const user = await User.findOne({
                email: req.body.email
            })
            if (user._id) {
                const project = await Project.findOne({
                    _id: req.body.projectId
                })
                if (project.users.includes(user._id)) {
                    res.status(503).json({
                        status: error
                    })
                } else {
                    await Project.updateOne({
                        _id: req.body.projectId
                    }, {
                        $push: {
                            users: user._id
                        }
                    })
                }
                await project.save()
                res.status(200).json('Project shared')
            }
        } catch (error) {
            res.status(503).json({
                status: error
            });
        }
    }
};