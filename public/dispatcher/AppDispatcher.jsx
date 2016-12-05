var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore.jsx');

AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case 'DELETE_ITEM':
            ListStore.deleteItem(action.deleItem);
            break;
        case 'GET_ITEMS':
            ListStore.getItems();
            break;
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.addItem);
            break;
        default:
        // no op
    }
})

module.exports = AppDispatcher;