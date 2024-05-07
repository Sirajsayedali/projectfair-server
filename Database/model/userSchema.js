//schema for users collection in database

//import mongoose

const mongoose = require("mongoose");

//schema creation
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  mailId: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  profile: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedIn: {
    type: String,
  }
});

//create model
const users = mongoose.model("users", userSchema);

//export model
module.exports = users;
