#!/usr/bin/env node
/**
 * Using the database database.csv (provided in project description),
    create a function countStudents in the file 3-read_file_async.js
 * Create a function named countStudents. It should accept a path in argument
    (same as in 2-read_file.js)
 * The script should attempt to read the database file asynchronously
 * The functioM`8En should return a Promise
 * If the database is not available, it should throw an error with the text Cannot load the database
 * If the database is available, it should log the following message to the console
    Number of students: NUMBER_OF_STUDENTS
 * It should log the number of students in each field, and the list with the following format:
    Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
* */
const fs = require('fs');

async function countStudents(path) {
  /*
     * CountStudents
     *@param: path - path to the database file
     *
     */
  const encoding = 'utf-8';
  let data = '';
  try {
    data = await fs.promises.readFile(path, encoding);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  // Log the Number of students to the console: NUMBER_OF_STUDENTS
  const rows = data.split('\n').slice(1);
  console.log(`Number of students: ${rows.length - 1}`);
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
    console.log(`Number of students in ${field}: ${fieldData[field].length}. List: ${fieldData[field]}`);
  });
}

module.exports = countStudents;
