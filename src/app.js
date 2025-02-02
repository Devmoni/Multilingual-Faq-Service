const express = require('express');
const bodyParser = require('body-parser');
const faqRoutes = require('./routes/faqRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

app.use('/api', faqRoutes);

sequelize.sync()
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
