var express = require("express");
var router = express.Router();
var model = require("../model/posts_model");

router.get("/", async (req, res) => {
  var result = await model.find({});
  try {
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  var id = parseInt(req.params.id);
  var result = await model.find({ id: id });
  try {
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  var body = req.body;
  var object = {
    id: body.id || undefined,
    owner: body.owner || undefined,
    tittle: body.tittle || undefined,
    content: body.content || undefined,
    created_at: body.created_at || undefined,
    tags: body.tags || undefined
  }
  var result = await model.insertMany(object);
  try {
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  var body = req.body;
  var id = req.params.id;
  var object = {
    id: body.id || undefined,
    owner: body.owner || undefined,
    tittle: body.tittle || undefined,
    content: body.content || undefined,
    created_at: body.created_at || undefined,
    tags: body.tags || undefined
  }
  var result = await model.updateOne({ id: id }, object);
  try {
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id/comments", async (req, res) => {
  var id = parseInt(req.params.id);
  var data = await model.aggregate([
    {
      $lookup: {
        from: "comments",
        localField: "id",
        foreignField: "id",
        as: "comments",
      },
    },
  ]);

  let result = data.filter((item) => item.id == id);
  try {
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
