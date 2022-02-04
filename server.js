const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

// const DB = 'mongodb+srv://dbUser:xxxMrceo@cluster0.2oil2.mongodb.net/sample_restaurants?retryWrites=true&w=majority';

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB connection successful!👋'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
