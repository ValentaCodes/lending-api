const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
    res.json({ message: 'Loan Tracker API' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});