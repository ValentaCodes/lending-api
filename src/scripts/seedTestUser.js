require('dotenv').config();
const bcrypt = require('bcrypt');
const { pool } = require('../config/connection');

async function upsertTestUser() {
  const testUser = {
    name: 'Test User',
    email: 'test.user@example.com',
    business_name: 'TestBiz',
    passwordPlain: 'Password123!',
  };

  try {
    // 1) Check if user already exists by unique email
    const [existingRows] = await pool.query('SELECT id, email FROM users WHERE email = ?', [testUser.email]);
    if (existingRows.length > 0) {
      console.log('✅ Test user already exists:', existingRows[0]);
      return;
    }

    // 2) Compute next ID since `id` is NOT AUTO_INCREMENT
    const [idRows] = await pool.query('SELECT COALESCE(MAX(id), 0) + 1 AS nextId FROM users');
    const nextId = idRows[0]?.nextId || 1;

    // 3) Hash password
    const saltRounds = 10;
    const hashed = await bcrypt.hash(testUser.passwordPlain, saltRounds);

    // 4) Insert row
    const insertSql = `
      INSERT INTO users (id, name, email, business_name, password)
      VALUES (?, ?, ?, ?, ?)
    `;
    const params = [nextId, testUser.name, testUser.email, testUser.business_name, hashed];

    await pool.query(insertSql, params);

    console.log('🎉 Inserted test user:', {
      id: nextId,
      name: testUser.name,
      email: testUser.email,
      business_name: testUser.business_name,
    });
  } catch (err) {
    console.error('❌ Failed to insert test user:', err.message);
    process.exitCode = 1;
  } finally {
    // Close the pool gracefully
    try {
      await pool.end();
    } catch (e) {
      // ignore
    }
  }
}

upsertTestUser();
