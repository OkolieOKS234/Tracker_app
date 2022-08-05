//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongoose Record Keeper
// mongoose.connection("mongodb://localhost:27017/expenseDB");

app.get("/", function (req, res) {
  res.render("expense");
});

app.post("/", function (req, res) {
  console.log(req.body);
});

let PORT = 3000;
app.listen(PORT, function () {
  console.log("Server started on port 3000");
});
