var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');

var ItemActions = {

    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            addItem: text
        });
    },

    getItems: function(){
        AppDispatcher.dispatch({
            actionType: 'GET_ITEMS'
        });
    },

    deleteItem: function(item){
        AppDispatcher.dispatch({
            actionType: 'DELETE_ITEM',
            deleItem: item
        });
    }

};

module.exports = ItemActions;