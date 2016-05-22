var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, "..", "public", "assets");
console.log('Directory Name: ' + __dirname);
var appPath = path.join(__dirname, "..", "app");
var modulesPath = path.resolve(__dirname, '../node_modules');
var publicPath = "http://localhost:3001/assets/";

var WEBPACK_HOST = "localhost";
var WEBPACK_PORT = 3001;

var commonLoaders = [
  {
    test: /\.jsx?$/,
    loaders: ["react-hot", "babel"],
    include: path.join(__dirname, "..", "app"),
  },
  { test: /\.(png|ico|eot|woff|woff2|ttf|svg|jpg|bmp|gif)(\?.*)?$/, loader: "url-loader" },
  { test: /\.css$/, loader: 'style!css?', include: [appPath, modulesPath]},
  { test: /\.html$/, loader: "html-loader" }
];

module.exports = [
  {
    // The configuration for the server-side rendering
    name: "server-side rendering",
    context: path.join(__dirname, "..", "app"),
    entry: {
      app: "./server"
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
    externals: /^[a-z\-0-9]+$/,
    module: {
      loaders: commonLoaders.concat([
          { test: /\.scss$/,
            loader: 'css/locals!sass',
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
        new webpack.NoErrorsPlugin()
    ]
  }
];
