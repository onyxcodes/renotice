// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    host: "localhost",
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  mode: "development",
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      maxSize: 300000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "stream": require.resolve("stream-browserify")
    },
    extensions: [
      '.js',
      '.jsx',
      '.css', ".tsx", ".ts"
    ],
    alias: {
      'renotice': path.resolve(__dirname, '../'),
      'pouchdb-promise$': "pouchdb-promise/lib/index.js",
      'styles': path.resolve(__dirname, "src/styles"),
      'components': path.resolve(__dirname, "src/components"),
      'hooks': path.resolve(__dirname, "src/hooks"),
      'views': path.resolve(__dirname, "src/views"),
      'assets': path.resolve(__dirname, "src/assets"),
      'features': path.resolve(__dirname, "src/features"),
      'store': path.resolve(__dirname, "src/store"),
      'utils': path.resolve(__dirname, "src/utils"),
    }
  },
};

module.exports = () => {
  return config;
};