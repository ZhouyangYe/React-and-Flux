var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        index: __dirname+'/public/js/index.jsx'
    },
    output: {
        path: __dirname+'/public/js/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devtool: 'eval-source-map',
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