var router = require('./router');

//get items
router.put('/items', function(req, res, next){
    var data = req.body;
    console.log(data.url);
    var Item = require('./schemas/item');
    var newItem = new Item({
        title: data.title,
        description: data.description,
        category: data.category,
        url: data.url
    });
    newItem.save(function(err){
        if(err){
            res.send(JSON.stringify({
                succeed: false,
                message: "Item not added due to some error!"
            }));
        }else{
            res.send(JSON.stringify({
                succeed: true,
                message: "Item has been added!"
            }));
        }
    });
});

router.get('/items',function(req,res,next){
    var Item = require('./schemas/item');
    Item.find({},function(err,docs){
        console.log(docs);
        if(!err){
            res.send(JSON.stringify({
                succeed: true,
                data: docs
            }));
        }else{
            res.send(JSON.stringify({
                succeed: false,
                message: "Item not found!"
            }));
        }
    });
});

router.delete('/items/:id',function(req,res,next){
    var Item = require('./schemas/item');
    var search = Item.find({_id:req.params.id},function(err){
        if(err){
            res.send(JSON.stringify({
                succeed: false,
                message: "No such file!"
            }));
        }else{
            search.remove(function(error){
                if(error){
                    res.send(JSON.stringify({
                        succeed: false,
                        message: "Deleting failed due to some reason!"
                    }));
                }else{
                    res.send(JSON.stringify({
                        succeed: true,
                        message: "Item has been deleted!"
                    }));
                }
            });
        }
    });
});

router.post('/items',function(req,res,next){

});