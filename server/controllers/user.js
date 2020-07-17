// Imports
const User = require('../models/User');

global.GlobalTimeOuts = new Array();
// Export controller
module.exports = {
    loginUser: async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body;
            const user = await User.findByCredentials(email, password);
            if (!user) {
                return res.status(401).json({
                    status: 'User not found'
                });
            }
            const token = await user.generateAuthToken();
            if (!token) {
                return res.send({
                    status: 'Failed to create JWT'
                });
            }
            await User.findByIdAndUpdate({
                _id: user._id
            }, {
                $set: {
                    LastLogin: Date.now()
                }
            });
            const user_data = {
                projects: user.projects,
                email: user.email,
                LastLogin: user.LastLogin,
                GDPRterms: user.GDPRterms,
            };
            res
                .status(200)
                .cookie('token', token, {
                    expires: new Date(Date.now() + 43200000),
                    secure: false,
                    httpOnly: true
                })
                .json({
                    status: 'OK',
                    user: user_data
                });
        } catch (error) {
            console.log(error);
            res.status(403).send({
                status: 'Bad password'
            });
        }
    },
    createUser: async (req, res) => {
        try {
            const email = req.body.email
            const password = req.body.password
            if (
                await User.findOne({
                    email: email
                })
            ) {

                res.status(400).json('Email already in use');
            } else {
                const user = new User({
                    email: email
                }, {
                    password: password
                });
                await user.save();
                res.status(200).json('User created');
            }
        } catch (error) {
            res.status(503).json({
                status: error
            });
        }
    },
    GDPRtermsAccept: async (req, res) => {
        try {
            const usr = await User.findOne({
                email: req.body.email
            });
            if (!usr) {
                return res.status(400).json({
                    status: 'User with such email doesnt exist'
                });
            }
            await User.updateOne({
                email: req.body.email
            }, {
                GDPRterms: true
            });
            usr.save();
            res.status(200).json({
                status: 'Accepted terms and conditions'
            });
        } catch (error) {
            res.status(503).json({
                status: 'Couldnt accept terms and conditions'
            });
        }
    }
};