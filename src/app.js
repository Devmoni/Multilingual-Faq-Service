const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const faqRoutes = require('./routes/faqRoutes');
const sequelize = require('./config/database');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

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