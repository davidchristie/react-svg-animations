var path = require('path')

module.exports = {
  devServer: {
    contentBase: './docs'
  },
  devtool: 'eval-source-map',
  entry: {
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
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/'
  }
}
