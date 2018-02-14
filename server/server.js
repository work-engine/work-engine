// EXPRESS SERVER
const express = require('express');
const app = express();

// MIDDLEWARE - FOR PARSING OF FORMS AND JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// MIDDLEWARE - FOR PATH
const path = require('path');

// WEB SOCKETS - AND RELATED DEPENDENCIES
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);

// ROUTERS - FOR API 
const amazonRouter = require('./routers/amazonRouter');
const historyRouter = require('./routers/historyRouter');

// DATABASE
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/work_engine';
mongoose.connect(mongoURI);

// DEFAULT PATH FOR STATIC FILES - SERVES INDEX.HTML
app.use(express.static(path.join(__dirname, './../client')));
ç
// ROUTES
app.use('/api/amazon', amazonRouter);
app.use('/api/history', historyRouter);

// INTERCEPTS ALL STRAY REQUESTS 
app.all('*', (req, res, next) => {
  console.log('catch all on the root');
  err = new Error('index.js - default catch all route - not found');
  err.functionName = 'server.js';
  err.status = 404;
  next(err);
});

// GLOBAL ERROR CATCHER
app.use((err, req, res, next) => {
  const error = err.functionName ? `${err.functionName} ${err}` : err;
  const errorStatus = err.status ? err.status : 500;
  res.status(errorStatus).end(`Server.js - ${error}`);
});

// EXPRESS SERVER - LISTEN ON 3000
server.listen(3000, () => console.log('Server is now listening on port 3000'));
