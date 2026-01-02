import User from "../models/User.js"

export const getAllUsers = async (req, res) => {
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

export const getUser = async (req, res) => {
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