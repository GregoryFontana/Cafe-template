const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'https://cafe-template.herokuapp.com/',
          changeOrigin: true,
        })
      );


  // ...
};