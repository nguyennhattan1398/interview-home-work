var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var user_route = require("./route/user_route");
var comment_route = require("./route/comment_route");
var post_route = require("./route/post_route");

var PORT = process.env.PORT || 1000;
mongoose.connect("mongodb+srv://123:123@cluster0.k71gc.mongodb.net/test", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
});

app.get("/", function (req, res) {
    res.send("Hello world");
});

app.use("/users", user_route);
app.use("/comments", comment_route);
app.use("/posts", post_route);

app.listen(PORT, function () {
    console.log("Running on port : " + PORT);
});
