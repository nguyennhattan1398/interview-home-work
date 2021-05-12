const mongoose = require("mongoose");

let Post_Schema = new mongoose.Schema({
  _id: require('mongodb').ObjectID,
  id: Number,
  owner: Number,
  tittle: String,
  content: String,
  created_at:String,
  tags: Array
},
{versionKey: false});

const Posts_Schema = mongoose.model("posts", Post_Schema);
module.exports = Posts_Schema;
