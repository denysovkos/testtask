/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require('body-parser');
const api = require('./db/controllers/api');
const jsonParser = bodyParser.json();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orders');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('========> MONGO CONNECTED <========');
});



if (isDeveloping) {
  app.get('/order', api.showAllOrders);
  app.get('/order/:id', api.showOrder);
  app.post('/order',jsonParser, api.addOrder);
  app.put('/order/:id', api.updateOrder);
  app.delete('/order/:id', api.deleteOrder);
  app.get('/docs/:id', api.showQuantityOfDocs);

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));

  app.get('/order', api.showAllOrders);
  app.get('/order/:id', api.showOrder);
  app.post('/order', jsonParser, api.addOrder);
  app.put('/order/:id', api.updateOrder);
  app.delete('/order/:id', api.deleteOrder);
  app.get('/docs/:id', api.showQuantityOfDocs);

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, 'localhost', function onStart(error) {
  if (error) {
    console.log(error);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
