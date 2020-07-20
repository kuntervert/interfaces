// Imports
const bcrypt = require('bcryptjs');
const validator = require('validator');
const mongoose = require('../database');
const jwt = require('jsonwebtoken');
const shortid = require('shortid');

// Define schema
const userSchema = mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error('invalid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    username: {
        type: String,
        required: true
    },
    projects: [{
        type: Object
    }],
    LastLogin: {
        type: String,
    },
    GDPRterms: {
        type: Boolean,
        default: false
    }
});

// Presave hook
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    user.password = await bcrypt.hash(user.password, 8);
});

// Define schema static methods
userSchema.statics.findByCredentials = async (email, password) => {
    try {
        const user = await User.findOne({
            email: String(email)
        });
        if (await bcrypt.compare(password, user.password || '')) {
            return user;
        }
        throw new Error();
    } catch (error) {
        throw new Error(error);
    }
};

// JWToken generate method
userSchema.methods.generateAuthToken = function () {
    const {
        _id
    } = this;
    return jwt.sign({
            _id
        },
        process.env.JWT_KEY, {
            algorithm: 'HS512',
            expiresIn: '12h'
        }
    );
};

//User model
const User = mongoose.model('User', userSchema);
// Export model
module.exports = User;