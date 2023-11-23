#!/usr/bin/env node
const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');

describe('calculate Number', () => {
  describe('correct input', () => {
    it('should return 6 for type SUM when 1.4 and 4.5 is passed', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return -4 for type SUBTRACT when 1.4 and 4.5 is passed', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 0.2 for type DIVIDE when 1.4 and 4.5 is passed', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('wrong Input', () => {
    it('should return Error when the 1.5 and 0 is passed', () => {
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });
  });
  describe('wrong type', () => {
    it('should return undefined when the 1.5 and 3.7 is passed', () => {
      expect(calculateNumber('MUL', 1.5, 3.7)).to.equal(undefined);
    });
  });
});
