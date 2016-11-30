var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');

var ItemActions = {

    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },

};

module.exports = ItemActions;