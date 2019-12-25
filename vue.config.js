const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  configureWebpack: config => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
    };

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new InjectManifest({
          swSrc: './public/sw.js',
        })
      );
    }

  }
}
