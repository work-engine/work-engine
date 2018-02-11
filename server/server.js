// Import dependencies to setup server and database
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

// Import dependencies to setup web sockets
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);

// Importing routers for 'api' and 'amazon' endpoints
const apiRouter = require('./routers/apiRouter');
const amazonRouter = require('./routers/amazonRouter');

// Connect to local db 'work_engine'
const mongoURI = 'mongodb://localhost/work_engine';
mongoose.connect(mongoURI);

// Start server on port 3000
server.listen(3000, () => console.log('Server is now listening on port 3000'));

// Allows us to read req.body 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Allow client to be public 
app.use(express.static(path.join(__dirname, './../client')));

// Route requests to '/api' router 
app.use('/api', apiRouter);

// Route requests to '/amazon' router
app.use('/amazon', amazonRouter);

// Intercept stray requests
app.all('*', (req, res, next) => {
  console.log('catch all on the root');
  err = new Error('index.js - default catch all route - not found');
  err.functionName = 'server.js';
  err.status = 404;
  next(err);
});

// Log error messages
app.use((err, req, res, next) => {
  const error = err.functionName ? `${err.functionName} ${err}` : err;
  const errorStatus = err.status ? err.status : 500;
  res.status(errorStatus).end(`Server.js - ${error}`);
});