const { resolve } = require('path')

module.exports = {
  server: {
    open: './src/index.html'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    }
  }
}