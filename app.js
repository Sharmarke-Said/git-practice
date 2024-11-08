const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);

module.exports = app;
