const path = require('path');
const glob = require('glob');

module.exports = {
  entry: {
    main: process.env.ENTRY_FILE,
     secondary: glob.sync('./src/calculator/assets/typescript/**/*.ts'),   
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  devtool: 'source-map',
};
