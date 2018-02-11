// Handle middleware
const express = require('express');
// Parse req.body
const bodyParser = require('body-parser');
// Use path.join
const path = require('path');
// Create middleware
const app = express();
// Import api router
const apiRouter = require('./routers/apiRouter')
// Import mongoose
const mongoose = require('mongoose');
// Import http
const http = require('http');
// Create a server
const server = http.createServer(app);
// Pass a http.Server instance to the listen method
const io = require('socket.io').listen(server);

// CONTROLLERS
const amazonController = require('./controllers/amazonController');

// The server should start listening
server.listen(3000, () => {
  console.log('Server is now listening on port 3000');
});

// Sets the db to 'work_engine'
const mongoURI = 'mongodb://localhost/work_engine';
mongoose.connect(mongoURI);

// Allows us to read req.body as an object
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Send index.html to a request for the homepage
app.use(express.static(__dirname + './../client/'));

// Route requests to to '/api' router handling endpoint
app.use('/api', apiRouter);

// Intercept all requests to an endpoint without a route within '/'
app.all('*', (req, res, next) => {
  console.log('catch all on the root');
  err = new Error('index.js - default catch all route - not found');
  err.functionName = 'server.js';
  err.status = 404;
  next(err);
});

// If an error is passed into next() by any route, thise function gets invoked and sends
// an error message to the client
app.use((err, req, res, next) => {
  const error = err.functionName ? `${err.functionName} ${err}` : err;
  const errorStatus = err.status ? err.status : 500;
  res.status(errorStatus).end(`Server.js - ${error}`);
})

// Start the server on port 3000
// app.listen(3000, () => console.log(`Listening on PORT: 3000 from server.js`));