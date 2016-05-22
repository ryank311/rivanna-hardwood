var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, "..", "public", "assets");
var appPath = path.join(__dirname, "..", "app");
var modulesPath = path.resolve(__dirname, '../node_modules');
var publicPath = "http://localhost:3001/assets/";

var WEBPACK_HOST = "localhost";
var WEBPACK_PORT = 3001;

var commonLoaders = [
  {
    test: /\.jsx?$/,
    loaders: ["react-hot", "babel"],
    include: appPath,
  },
  { test: /\.(png|ico|eot|woff|woff2|ttf|svg|jpg|bmp|gif)(\?.*)?$/, loader: "url-loader" },
  { test: /\.css$/, loader: 'style!css?', include: [appPath, modulesPath]},
  { test: /\.html$/, loader: "html-loader" }
];

module.exports = [
  {
    // The configuration for the client
    name: "browser",
    devtool: "cheap-module-eval-source-map",
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
      client:[ 'webpack-dev-server/client?http://' + WEBPACK_HOST + ":" + WEBPACK_PORT,
       'webpack/hot/only-dev-server',
       "./client" ]
    },
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: "[name].js",
      // The output path from the view of the Javascript
      publicPath: publicPath
    },
    module: {
      preLoaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["eslint"]
      }],
      loaders: commonLoaders.concat([
          { test: /\.scss$/,
            loader: 'style!css!sass?sourceMap&outputStyle=expanded',
            include: [appPath, modulesPath]
          }
      ])
    },
    resolve: {
      extensions: ['', '.react.js', '.js', '.jsx', '.scss', '.sass', '.css', '.woff2', '.woff', '.eot', '.ttf', '.svg', '.gif'],
      modulesDirectories: [
        "app", "node_modules"
      ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
  }
];
