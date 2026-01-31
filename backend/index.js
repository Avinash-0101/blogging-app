const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv');
dotenv.config();
const { connectToMongoDb } = require('./config/db');
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ["http://localhost:5173", "http://localhost"];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all origins in development
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use('/api/user', userRoutes);
// Health check
app.get('/', (req, res) => {
  res.send('API is running');
});

// DB connection and server start
connectToMongoDb().then(()=>{
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on port ${port}`);
    });
 });
