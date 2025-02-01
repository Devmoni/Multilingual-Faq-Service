const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
// const faqRoutes = require('./routes/faqRoutes');
// app.use('/api/faqs', faqRoutes);

module.exports = app;
