const path = require('path');

module.exports = {
  entry: {
    content: './src/content-script.js', // Tu archivo de script principal
    popup: './src/popup.js' // Si tienes más archivos, agrégalos aquí
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  mode: 'production'
};