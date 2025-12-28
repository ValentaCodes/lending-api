const { pool } = require('../config/connection');

const User = {
    findAll: async () => {
        const [users] = await pool.query("select * from users");
        // Return results
    }
};

module.exports = User;