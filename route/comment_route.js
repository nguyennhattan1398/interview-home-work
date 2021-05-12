var express = require("express");
var router = express.Router();
var model = require("../model/comments_model");

router.get("/", async (req, res) => {
  var postID = parseInt(req.query.postID);
  if (!postID) {
    var result = await model.find({});
  } else {
    var result = await model.find({ post: postID });
  }
  try {
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
