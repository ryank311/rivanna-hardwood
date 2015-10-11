var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, "..", "public", "assets");
var publicPath = "assets/";
var appPath = path.join(__dirname, "..", "app");
var modulesPath = path.resolve(__dirname, '../node_modules');

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: "babel-loader?stage=0",
    include: appPath
  },
  { test: /\.(png|eot|woff|woff2|ttf|svg|jpg|bmp)(\?.*)?$/, loader: "url-loader" },
  { test: /\.html$/, loader: "html-loader" },
  { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
  { test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap&outputStyle=expanded'),
    include: [appPath, modulesPath]
  }
];

var commonPlugins = [
    // extract inline css from modules into separate files
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("styles/main.css")
];

module.exports = [
  {
    // The configuration for the client
    name: "browser",
    /* The entry point of the bundle
     * Entry points for multi page app could be more complex
     * A good example of entry points would be:
     * entry: {
     *   pageA: "./pageA",
     *   pageB: "./pageB",
     *   pageC: "./pageC",
     *   adminPageA: "./adminPageA",
     *   adminPageB: "./adminPageB",
     *   adminPageC: "./adminPageC"
     * }
     *
     * We can then proceed to optimize what are the common chunks
     * plugins: [
     *  new CommonsChunkPlugin("admin-commons.js", ["adminPageA", "adminPageB"]),
     *  new CommonsChunkPlugin("common.js", ["pageA", "pageB", "admin-commons.js"], 2),
     *  new CommonsChunkPlugin("c-commons.js", ["pageC", "adminPageC"]);
     * ]
     */
    context: path.join(__dirname, "..", "app"),
    entry: {
      app: "./client"
    },
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: "[name].js",
      // The output path from the view of the Javascript
      publicPath: publicPath

    },
    devtool: "source-map",
    module: {
      preLoaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["eslint"]
      }],
      loaders: commonLoaders
    },
    resolve: {
      extensions: ['', '.react.js', '.js', '.jsx', '.css', '.scss', '.sass'],
      modulesDirectories: [
        "app", "node_modules"
      ]
    },
    plugins: commonPlugins
  }, {
    // The configuration for the server-side rendering
    name: "server-side rendering",
    context: path.join(__dirname, "..", "app"),
    entry: {
      app: "./server",
      header: "./elements/Header"
    },
    target: "node",
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: "[name].server.js",
      // The output path from the view of the Javascript
      publicPath: publicPath,
      libraryTarget: "commonjs2"
    },
    externals: [
      {
        'alt/AltContainer': true,
        'react/addons': true
      },
      /^[a-z\-0-9]+$/
    ],
    module: {
      loaders: commonLoaders
    },
    resolve: {
      extensions: ['', '.react.js', '.js', '.jsx', '.css', '.scss', '.sass'],
      modulesDirectories: [
        "app", "node_modules"
      ]
    },
    plugins: commonPlugins
  }
];
