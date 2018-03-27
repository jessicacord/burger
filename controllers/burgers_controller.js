var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgers.all(function(data) {

      res.render("index", {burgers: data});
    });
});

router.post("/api/burgers", function(req, res) {

    burgers.create(["burger_name"], [req.body.burger], function(result) {

        res.redirect("/");

    });
});

router.post("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    var change = "devoured = true";

    burgers.update(change, condition, function(result) {

        res.redirect("/");
  
      }
    );
  });

module.exports = router;