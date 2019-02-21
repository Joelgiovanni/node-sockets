var socket = io();

socket.on('connect', function() {
  console.log('New connection');

  socket.emit('newMessage', {
    from: 'Joel',
    text: 'I remember you! Hello!'
  });

  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'Hey!Its Joel'
  // });
});

// socket.on('disconnect', function() {
//   console.log('Connection has been dropped');
// });

// socket.on('newEmail', function(email) {
//   console.log('New email', email);
// });

socket.on('newMessage', function(message) {
  console.log('New message: ', message);
});
