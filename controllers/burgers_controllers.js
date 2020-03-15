var express = require("express");

var app = express.Router();

var burger = require("../models/burger.js");

app.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var dataObject = {
      burgers: data
    };
    console.log(dataObject);
    res.render("index", dataObject);
  });
});

app.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name"], [req.body.burger_name], function (result) {
      res.json({ id: result.insertId })
    });


});

app.put("/api/burgers/:id", function (req, res) {
  var condition = "devoured = " + 0 && req.params.id;

  burger.updateOne({
    devoured: req.body.devoured = 1
  },
    condition, function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});


module.exports = app;
