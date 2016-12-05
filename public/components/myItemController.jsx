var React = require('react');
var ListStore = require('../stores/ListStore');
var ItemActions = require('../actions/ItemActions');
var MyItems = require('./myItems');

var MyButtonController = React.createClass({
    getInitialState: function () {
        return {
            items: ListStore.getAll()
        };
    },

    componentDidMount: function() {
        ListStore.addChangeListener(this._onChange);
        ItemActions.getItems();
    },

    componentWillUnmount: function() {
        ListStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            items: ListStore.getAll()
        });
    },

    createNewItem: function (event) {
        ItemActions.addNewItem({"title":'Harry Potter',"description":'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley,',"category":'Novel',"url":'zhouyangbt\.ca'});
    },

    deleteItem: function(id){
        ItemActions.deleteItem(id);
    },

    render: function() {
        return <MyItems
            items={this.state.items}
            onCreate={this.createNewItem}
            onDelete={this.deleteItem}
        />;
    }

});

module.exports = MyButtonController;