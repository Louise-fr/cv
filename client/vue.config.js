const webpack  = require("webpack");
//var miniCssExtract = require("mini-css-extract-plugin");

module.exports = {
  configureWebpack: {
    plugins: [ 
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  },
}