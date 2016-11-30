var React = require('react');
var ReactDom = require('react-dom');

var MyItems = require('../components/myItemController');

ReactDom.render(
    <MyItems />,
    document.querySelector('#app')
);