var express = require('express');
var router = express.Router();
var mongoose = require('./connection');

//get items
router.put('/items', function(req, res, next){
    var data = req.body;
    var Item = require('./schemas/item');
    var newItem = new Item({
        title: data.title,
        description: data.description,
        category: data.category,
        url: data.url
    });

    newItem.save(function(err,bt){
        if(err) return console.log(err);
        res.send(bt.name);
    });
});

router.post('/items',function(req,res,next){
    console.log(req.body);
    //console.log(req.headers);
});

module.exports = router;