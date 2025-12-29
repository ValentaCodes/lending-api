const User = require('../models/User');

const getUsers = async (req, res) => {
    try {
        await User.findAll()
        res.status(200)
    } catch (error) {
        res.status(500)
    }
};

module.exports = { getUsers };