var React = require('react');

var MyItems = function(props) {
    var items = props.items;
    var itemHtml = items.map(function (listItem, i) {
        return <li key={i}>
                <h3>{listItem.title}</h3>
                <p>Description: {listItem.description}</p>
                <p>Category: {listItem.category}</p>
                <p>URL: {listItem.url}</p>
                <button onClick={()=>{props.onDelete(listItem._id)}}>Delete</button>
            </li>;
    });

    return <div>
        <ul>{itemHtml}</ul>
        <button onClick={props.onCreate}>New Item</button>
    </div>;
};

module.exports = MyItems;