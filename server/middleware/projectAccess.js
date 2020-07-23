const User = require('../models/User');

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(503).json({
                status: 'Mong error'
            });
        }
        if (!user.projects.map((c) => c._id).includes(req.params.id)) {
            return res.status(401).json({
                status: 'Unauthorized'
            });
        }
        next();
    } catch (err) {
        return res.status(503).json({
            status: error
        });
    }
};