const { pool } = require('../config/connection');

const User = {
    findAll: async () => {
        const [users] = await pool.query("select * from user");
        return users;
    }
};

module.exports = User;