var path = require('path')

module.exports = {
  devServer: {
    contentBase: './docs'
  },
  devtool: 'eval-source-map',
  entry: {
    bubbles: './src/bubbles',
    triangles: './src/triangles'
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs')
  }
}
