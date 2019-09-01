const BundleTracker = require("webpack-bundle-tracker");
const webpack = require('webpack');
//const path = require("path");
module.exports = {
    
    publicPath: '/static/',
    //publicPath: "http://0.0.0.0:8080/",
    outputDir: '../frontend/dist/',
    
    chainWebpack: config => {
        
        
        config.optimization
            .splitChunks(false)

        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: '../frontend/webpack-stats.json'}])

        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            .public('http://0.0.0.0:8080')
            .host('0.0.0.0')
            .historyApiFallback(true)
            .port(8080)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({"Access-Control-Allow-Origin": ["https://api.saqqi.com/"]
                     })
          },
          
                    configureWebpack: {
            plugins: [
              new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
              })
            ],

      }




        };
