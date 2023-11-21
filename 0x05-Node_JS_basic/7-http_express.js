#!/usr/bin/env node
/**
 * In a file named 5-http.js, create a small HTTP server using the http module:
 *  It should be assigned to the variable app and this one must be exported
 *  HTTP server should listen on port 1245
 *  It should return plain text
 *   When the URL path is /, it should display Hello Holberton School! in the page body
 *   When the URL path is /students, it should display
 *    This is the list of our students followed by the same content as the file 3-read_file_async.js
 * (with and without the database) - the name of the database must be passed as argument of the file
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
* */
const express = require('express');

const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  // Handle the route /
  return res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  // Handle the route /students
  const encoding = 'utf-8';
  const filename = process.argv[2];
  res.write('This is the list of our students\n');
  let data = '';
  try {
    data = await fs.promises.readFile(filename, encoding);
  } catch (err) {
    return res.end('Cannot load the database');
  }
  // Log the Number of students to the console: NUMBER_OF_STUDENTS
  const rows = data.split('\n').slice(1);
  res.write(`Number of students: ${rows.length - 1}\n`);
  const fieldData = {};
  // Log the number of students in each field in provided format
  rows.forEach((student) => {
    if (student) {
      const studentField = student.split(',');
      const firstname = studentField[0];
      const field = studentField[3];
      if (field in fieldData) {
        fieldData[field] = fieldData[field].concat(` ${firstname}`);
      } else {
        fieldData[field] = [firstname];
      }
    }
  });
  const fieldList = Object.keys(fieldData);
  fieldList.forEach((field) => {
    res.write(`Number of students in ${field}: ${fieldData[field].length}. List: ${fieldData[field]}\n`);
  });
  return res.send();
});

app.listen(1245, '0.0.0.0', () => { console.log('running'); });

module.exports = app;
