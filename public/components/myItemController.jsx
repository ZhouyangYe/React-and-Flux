var React = require('react');
var ListStore = require('../stores/ListStore');
var ItemActions = require('../actions/ItemActions');
var MyItem = require('./myItems');

var MyButtonController = React.createClass({
    getInitialState: function () {
        return {
            items: ListStore.getAll()
        };
    },

    componentDidMount: function() {
        ListStore.addChangeListener(this._onChange);
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
        ItemActions.addNewItem({"title":'Zhouyang',"description":'A handsome guy!!',"category":'Person',"url":'zhouyangbt.ca'});
    },

    render: function() {
        return <MyItem
            items={this.state.items}
            onClick={this.createNewItem}
        />;
    }

});

module.exports = MyButtonController;