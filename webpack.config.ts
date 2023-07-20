import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    clean: true 
  },
};

export default config;
