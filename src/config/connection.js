import mysql from "mysql2/promise";
import 'dotenv/config';
const pool = mysql.createPool(({
    host: process.env.DB_HOST,
    database:process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    waitForConnections: true
}))

// Test connection function
export const testConnection = async () => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        console.log('✅ Database connected');
        return true;
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        return false;
    }
};

export default testConnection;