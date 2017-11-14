'use strict';
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.dev');
const path = require('path');
const compiler = Webpack(webpackConfig);
const MockApp = require('./server/serverA');
const proxyUrl = process.env.NODE_ENV=='mock'?'http://localhost:9000':'http://jdt-uat.e-hqins.com';
const server = new WebpackDevServer(compiler, {
    stats: {
        colors: true
    },
    proxy: {
        '/jdt-web/**': {
            target: proxyUrl,
            secure: false,
            // rewrite: function(req) {
            //     req.url = req.url.replace(/^\/api/, '');
            // },
            changeOrigin: true
        }
        // '/jdt-web': {
        //     target: 'http://localhost:9000',
        //     secure: false
        // }
    },
    contentBase: path.join(__dirname, '/views/'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
});
server.listen(8888, 'localhost', () => {
    console.log('Starting server on http://localhost:8888');
});

MockApp.listen(9000, ()=>{
    console.log('Mock server on http://localhost:9000');
});
