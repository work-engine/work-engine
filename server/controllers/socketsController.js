const io = require('socket.io');
const socketsController = {};

socketsController.emit = (req, res, next) => {
  io.emit('incoming product', res.locals.product);
  next();
};