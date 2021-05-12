var express = require("express");
var router = express.Router();
var model = require("../model/users_model");

router.get("/", async (req, res) => {
  var result = await model.find({});
  try {
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
