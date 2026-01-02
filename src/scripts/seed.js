require('dotenv').config();
const { pool } = require('../config/connection');

const users = [
    {
        name: 'John Doe',
        email: 'john@test.com',
        password: 'password123',
        business_name: 'Johns Pizza Shop'
    },
    {
        name: 'Sarah Martinez',
        email: 'sarah@bakery.com',
        password: 'password123',
        business_name: 'Sarahs Sweet Treats'
    },
    {
        name: 'Mike Johnson',
        email: 'mike@construction.com',
        password: 'password123',
        business_name: 'Johnson Construction LLC'
    },
    {
        name: 'Emily Chen',
        email: 'emily@techstart.com',
        password: 'password123',
        business_name: 'TechStart Solutions'
    },
    {
        name: 'David Brown',
        email: 'david@coffee.com',
        password: 'password123',
        business_name: 'Downtown Coffee Co'
    }
];

const seedUsers = async () => {
    try {
        console.log('🌱 Starting seed...');

        // Clear existing users (optional - remove if you want to keep existing data)
        await pool.query('DELETE FROM users');
        console.log('✅ Cleared existing users');

        // Insert users
        for (const user of users) {
            const [result] = await pool.query(
                'INSERT INTO users (name, email, password, business_name) VALUES (?, ?, ?, ?)',
                [user.name, user.email, user.password, user.business_name]
            );
            console.log(`✅ Created user: ${user.name} (ID: ${result.insertId})`);
        }

        console.log('🎉 Seed completed successfully!');
        process.exit(0);

    } catch (error) {
        console.error('❌ Seed failed:', error.message);
        process.exit(1);
    }
};

seedUsers();