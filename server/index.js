const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const jobsRoute = require('./routes/jobs.js');

const app = express();


app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

const httpServer = http.createServer(app);

httpServer.listen(8080);

app.use('/api', jobsRoute);

app.get('/', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Hello, Fake homepage!</h1>');
});
