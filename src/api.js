import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function subscribeToPrice(callback) {
  socket.on('price', price => callback(null, price));
  socket.emit('subscribeToPrice', 1000);
}

export { subscribeToPrice };
