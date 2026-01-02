import pkg from '../config/connection.js';

export const {pool} = pkg;

export const User = {
    findAll: async () => {
        const [users] = await pool.query('SELECT * FROM users');
        return users;
    },

    findUser: async () => {
        const id = req.query();
        const [user] = await pool.query('SELECT * from users where id= ?', [id])
        return user;
    }
};

export default {User,  pool}