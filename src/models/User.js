const {pool} = require('../config/connection');

const User = {
    findAll: async () => {
        const [users] = await pool.query("select * from users");
        return users;
    },

    findUser: async () => {
        const id = req.query();
        const [user] = await pool.query('SELECT * from users where id=$1', [id])
        return user;
    }
};

module.exports = User;