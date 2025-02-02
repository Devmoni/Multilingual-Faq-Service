const express = require('express');
const bodyParser = require('body-parser');
const faqRoutes = require('./routes/faqRoutes');
const sequelize = require('./config/database');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', faqRoutes);

// Database connection (with Sequelize)
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

module.exports = app;