const mongoose = require("mongoose");

let Comment_Schema = new mongoose.Schema(
  {
    _id: require("mongodb").ObjectID,
    id: Number,
    owner: Number,
    post: Number,
    content: String,
    created_at: String,
  },
  { versionKey: false }
);

const Comments_Schema = mongoose.model("comments", Comment_Schema);
module.exports = Comments_Schema;
