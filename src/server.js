const express = require('express');
const sequelize = require('./config/database');
const FAQ = require('./models/faqModel');

const app = express();

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
