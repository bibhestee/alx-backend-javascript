#!/usr/bin/env node
const fs = require('fs');

async function readDatabase(path) {
  /*
   * readDatabase
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
  // console.log(`Number of students: ${rows.length - 1}`);
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
  return fieldData;
}

export default readDatabase;
