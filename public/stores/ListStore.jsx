var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');

var ListStore = assign({}, EventEmitter.prototype, {
    items: [],
    getAll: function () {
        return this.items;
    },

    getItems: function(){
        $.ajax({
            url: "/api/items",
            method: "GET",
            dataType: "json",
            success: function(data){
                if(data.succeed){
                    this.items = data.data;
                }else{
                    console.log(data.message);
                }
                this.emitChange();
            }.bind(this)
        });
    },

    addNewItemHandler: function (item) {
        $.ajax({
            url: "/api/items",
            method: "PUT",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify(item),
            success: function (data) {
                console.log(data);
                if(data.succeed){
                    this.getItems();
                }else{
                    console.log(data.message);
                }
            }.bind(this)
        });
    },

    deleteItem: function(item){
        $.ajax({
            url: "/api/items/"+item,
            method: "DELETE",
            dataType: "json",
            success: function(data){
                console.log(data);
                if(data.succeed){
                    this.getItems();
                }else{
                    console.log(data.message);
                }
            }.bind(this)
        });
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

module.exports = ListStore;