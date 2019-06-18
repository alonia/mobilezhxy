const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 50   //基准大小 baseSize，需要和rem.js中相同
})

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
         proxy: {
            '/': {
                target: 'http://tour.12301cn.cn',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
  }
}
