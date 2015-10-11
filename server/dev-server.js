var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var path = require('path');
var fs = require('fs');

var webpackConfig = require('../webpack/webpack-client-side.config.js');
var publicPath = "http://localhost:3001/assets/";

// Fire up webpack and pass in the configuration file we created
var bundleStart = null;
var compiler = webpack(webpackConfig);

var server = new webpackDevServer(compiler, {
    publicPath: publicPath,

    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
    hot: true,

    stats: { colors: true },

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: true

});
server.listen(3001);
