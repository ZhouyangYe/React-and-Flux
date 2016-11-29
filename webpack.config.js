var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        app: __dirname+'/public/javascripts/app.jsx'
    },
    output: {
        path: __dirname+'/public/javascripts/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders:[
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
            { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
        ]
    },
    plugins:[
        new webpack.OldWatchingPlugin()
    ]
};