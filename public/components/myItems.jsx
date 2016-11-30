var React = require('react');

var MyItem = function(props) {
    var items = props.items;
    var itemHtml = items.map(function (listItem, i) {
        return <li key={i}>
                <h3>{listItem.title}</h3>
                <p>{listItem.description}</p>
                <p>{listItem.category}</p>
                <p>{listItem.url}</p>
            </li>;
    });

    return <div>
        <ul>{itemHtml}</ul>
        <button onClick={props.onClick}>New Item</button>
    </div>;
};

module.exports = MyItem;