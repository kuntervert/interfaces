// Imports
const Project = require('../models/Project');
const User = require('../models/User');
const moment = require('moment-timezone');

// Export controller
module.exports = {
	createProject: async (req, res) => {
		try {
			let currDate = moment().tz('Europe/Helsinki').format('DD MMMM YYYY, HH:mm');
			const project = new Project({
				title: req.body.title,
				users: {
					username: req.body.username,
					userId: req.body.userId
				},
				createdAt: currDate
			});
			if (
				await User.findOne({
					_id: req.body.userId
				})
			) {
				await User.updateOne(
					{
						_id: req.body.userId
					},
					{
						$push: {
							projects: project
						}
					}
				);
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
			console.log(req.params.id);
			const projects = await Project.find({
				users: { $elemMatch: { userId: req.params.id } }
			});
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
			});
			if (user._id) {
				const project = await Project.findOne({
					_id: req.body.projectId
				});
				if (project.users.includes(user._id)) {
					res.status(503).json({
						status: error
					});
				} else {
					await Project.updateOne(
						{
							_id: req.body.projectId
						},
						{
							$push: {
								users: {
									username: user.username,
									userId: user._id
								}
							}
						}
					);
					await User.updateOne(
						{
							_id: user._id
						},
						{
							$push: {
								projects: project
							}
						}
					);
				}
				await project.save();
				res.status(200).json('Project shared');
			}
		} catch (error) {
			res.status(503).json({
				status: error
			});
		}
	},
	deleteProject: async (req, res) => {
		try {
			await Project.findByIdAndDelete({
				_id: req.params.id
			});
			res.send('Project deleted');
		} catch (error) {
			res.status(400).json({
				status: error
			});
		}
	}
};
