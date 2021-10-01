var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors')
var morgan = require('morgan')
var indexRouter = require('./routes/index');
var app = express();
var config = require('../config')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(morgan('combined'))


app.use('/', indexRouter);

app.listen(config.server.port, () => {
    console.log(`The server is now running on Port ${config.server.port}`);
  });


module.exports = app;
