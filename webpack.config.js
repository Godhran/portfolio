// const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

// module.exports = {
//   mode: "development",
//   entry: path.resolve(__dirname, "/src/index.js"),
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "index.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // .js and .jsx files
//         exclude: /node_modules/, // excluding the node_modules folder
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.(sa|sc|c)ss$/, // styles files
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
//         loader: "url-loader",
//         options: { limit: false },
//       },
// {
//   test: /\.(png|jp(e*)g|svg|gif)$/,
//   use: ["file-loader"],
// },
//       {
//         test: /\.svg$/,
//         use: ["@svgr/webpack"],
//       },
//     ],
//   },
//   target: "web",
//   plugins: [
    // new webpack.NoEmitOnErrorsPlugin(),
    // new HtmlWebPackPlugin({
    //   // Create HTML file that includes references to bundled CSS and JS.
    //   template: path.resolve(__dirname, "/public/index.html"),
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //   },
    //   inject: true,
    // }),
//   ],
//   performance: {
//     hints: false,
//     maxEntrypointSize: 512000,
//     maxAssetSize: 512000,
//   },
// externals: {
//   react: "react",
// },
// };

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000,
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: path.resolve(__dirname, "/public/index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
