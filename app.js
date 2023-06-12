// src/app.js
const express = require('express');
const dbConfig = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const Task = require('./models/taskModel');

const app = express();
const PORT = process.env.PORT || 3000;



// Associate the Sequelize instance with the models
const db = {};

db.Task = Task;

// Middleware
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
