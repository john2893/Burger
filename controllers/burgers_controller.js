var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/",function(req,res){
    burger.selectAll(function(data){
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

  
module.exports = router;
