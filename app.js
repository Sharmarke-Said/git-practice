const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Parse JSON bodies
app.use(express.json());

// Use routes
app.use("/api/users", userRoutes);

module.exports = app;
