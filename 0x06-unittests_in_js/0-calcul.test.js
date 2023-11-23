#!/usr/bin/env node
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculate Number', () => {
  it('should return 5 when the 1.5 and 3.7 is passed', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
