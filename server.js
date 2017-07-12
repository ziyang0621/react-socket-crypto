const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Gdax = require('gdax');

// Create our app
const PORT = process.env.PORT || 3000;
const websocket = new Gdax.WebsocketClient(['BTC-USD']);

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

io.on('connection', (client) => {
  client.on('subscribeToPrice', (interval) => {
    setInterval(() => {
      websocket.on('message', (data) => {
        console.log('the price', data.price);
        client.emit('price', data.price);
      });
    }, interval);
  });
});

app.use(express.static('public'));

http.listen(PORT, () => {
  console.log('server starts', PORT);
});
