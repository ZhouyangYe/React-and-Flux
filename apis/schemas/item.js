var mongoose = require('../connection');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    title: String,
    description: String,
    category: String,
    url: String
});

var Item = mongoose.model('Item',itemSchema);

module.exports = Item;