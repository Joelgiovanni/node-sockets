const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'user1',
    text: 'Hey Joel its U1!',
    createdAt: Date.now()
  });

  socket.on('newMessage', newMessage => {
    //Note that a template string cannot be used in the line below
    console.log('Response', newMessage);
  });

  // socket.emit('newEmail', {
  //   from: 'Example@email.com',
  //   text: 'Hey Joel, its Adam'
  // });

  // socket.on('createEmail', newEmail => {
  //   console.log('createEmail', newEmail);
  // });

  // socket.on('disconnect', () => {
  //   console.log('Connection has been lost');
  // });
});

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});
