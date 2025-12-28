const express = require('express');
const app = express();
const router = express.Router();
require("dotenv").config();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
    res.json({
        message: 'Loan Tracker API is running!',
        timestamp: new Date().toLocaleString()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});