const path = require('path');

const SRC = path.resolve(__dirname, 'src');
const PUBLIC = path.resolve(__dirname, 'public');

module.exports = {
  entry: `${SRC}/index.js`,
  output: {
    path: PUBLIC,
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PUBLIC
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
};
