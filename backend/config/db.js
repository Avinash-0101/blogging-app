const mongoose = require('mongoose');

const connectToMongoDb = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blogging-app';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = { connectToMongoDb };
