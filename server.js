const io = require('socket.io')();
const Gdax = require('gdax');

const port = 8000;
const websocket = new Gdax.WebsocketClient(['BTC-USD']);

io.on('connection', (client) => {
  client.on('subscribeToPrice', (interval) => {
    setInterval(() => {
      websocket.on('message', (data) => {
        console.log(data.price);
        client.emit('price', data.price);
      });
    }, interval);
  });
});

io.listen(port);
console.log('listening on port ', port);
