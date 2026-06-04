const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB Atlas...');
    // Add a 5 second timeout so it doesn't hang forever
    const conn = await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('Atlas connection failed. Automatically spinning up a local in-memory database for development...');
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`Local In-Memory MongoDB Connected: ${conn.connection.host}`);
    } catch (fallbackError) {
      console.error(`Error connecting to In-Memory MongoDB: ${fallbackError.message}`);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
