const app = require('./app');
const sequelize = require('./config/database');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    console.log('Database connected and synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Error connecting to database:', err));
