const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    profilePicture:{
      type: String,
      default: 'empty-avatar.png',
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const User = mongoose.model('User', userSchema);

module.exports = User;
