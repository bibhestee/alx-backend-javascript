#!/usr/bin/env node
/**
  * Install Express and in a file named 6-http_express.js,
     create a small HTTP server using Express module:
  * It should be assigned to the variable app and
     this one must be exported
  * HTTP server should listen on port 1245
  * Displays Hello Holberton School! in the page body
     for the endpoint /
  */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
}) 

app.listen(1245, () => {
  console.log('app is running');
};

module.exports = app;
