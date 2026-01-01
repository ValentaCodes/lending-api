const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            success: true,
            users: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

const getUser = async () => {
    try {
        const user = await User.findUser();
        res.status(200).json({
            success: true,
            user: user
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}

module.exports = [getAllUsers, getUser];