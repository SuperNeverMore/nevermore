const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');
const app = express();
const path = require('path');

const compiler = webpack(webpackConfig);

app.use(express.static(path.resolve(__dirname + '/../static')));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: '/',
    stats: {
        colors: true
    },
    noInfo: true,
    historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

const server = app.listen(3000, function() {

    console.log('our app listening at http://%s:%s', 'localhost', 3000);
});
