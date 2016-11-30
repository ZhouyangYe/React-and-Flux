var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');

var ListStore = assign({}, EventEmitter.prototype, {
    items: [],
    getAll: function () {
        return this.items;
    },

    addNewItemHandler: function (text) {
        this.items.push(text);
        //console.log(text);
        $.ajax({
            url: "/api/items",
            method: "PUT",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify(text)
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