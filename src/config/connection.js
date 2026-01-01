const mysql = require("mysql2");

const pool = mysql.createPool(({
    host: process.env.DB_HOST,
    database:process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    waitForConnections: true
}))


const promisePool = pool.promise()

// Test connection function
const testConnection = async () => {
    try {
        const [rows] = await promisePool.query('SELECT 1 + 1 AS result');
        console.log('✅ Database connected');
        return true;
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        return false;
    }
};

module.exports = {
    pool: promisePool,
    testConnection
};