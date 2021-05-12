const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
  _id: require('mongodb').ObjectID,
  id: Number,
  username: String,
  password: String,
  name: String,
  dob: String,
  created_at:String
},
{versionKey: false});

const Users_Schema = mongoose.model("users", User_Schema);
module.exports = Users_Schema;
