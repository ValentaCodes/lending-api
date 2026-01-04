import {User} from "../models/User.js"

//Retrieve all users in database
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        if (!users || users.length === 0) {
            return res.status(404).json({ error: 'No users'})
        }

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

//Retrieves a single user from the database
export const getUser = async (req, res) => {

    try {
        const { id } = req.params;
        const user = await User.findUser(id);

        if (!user || user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

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

