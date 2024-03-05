const {expect} = require('chai');
const {describe, beforeEach, afterEach, it} = require('mocha');
const NumbersValidator = require('../../app/numbers_validator.js');

describe('NumbersValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('isNumberEven', () => {
    it('1.should return true if number is even', () => {
      const input = 8;
      expect(validator.isNumberEven(input)).to.be.equal(true);
    });

    it('2.should return false if number is odd', () => {
      const input = 9;
      expect(validator.isNumberEven(input)).to.be.equal(false);
    });

    it('3.should throw an error when provided a string', () => {
      expect(() => {
        validator.isNumberEven('4');
      }).to.throw(`[4] is not of type "Number" it is of type "string"`);
    });
  });

  describe('getEvenNumbersFromArray', () => {
    it('1.should return an array of even numbers', () => {
      const input = [1, 2, 3, 4, 5, 6];
      expect(validator.getEvenNumbersFromArray(input)).to.deep.equal([2, 4, 6]);
    });

    it('2.should return an empty array if there are no even numbers', () => {
      const input = [1, 3, 5];
      expect(validator.getEvenNumbersFromArray(input)).to.deep.equal([]);
    });

    it('3.should throw an error when provided a non-array', () => {
      const input = 'test';
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array`);
    });

    it('4.should throw an error when provided an array with non-numbers', () => {
      const input = [1, '2', 3, '4', {}];
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });
  });

  describe('isAllNumbers', () => {
    it('1.should return true if all elements are numbers', () => {
      const input = [1, 2, 3, 4];
      expect(validator.isAllNumbers(input)).to.be.equal(true);
    });

    it('2.should return false if any element is not a number', () => {
      const input = [1, 2, '3', 4];
      expect(validator.isAllNumbers(input)).to.be.equal(false);
    });

    it('3.should throw an error when provided a non-array', () => {
      const input = 'test';
      expect(() => {
        validator.isAllNumbers(input);
      }).to.throw(`[${input}] is not an array`);
    });
  });

  describe('isInteger', () => {
    it('1.should return true when passed an integer', () => {
      const input = 8;
      expect(validator.isInteger(input)).to.be.equal(true);
    });

    it('2.should return false when passed a non-integer', () => {
      const input = 8.5;
      expect(validator.isInteger(input)).to.be.equal(false);
    });

    it('3.should throw an error when passed a non-number', () => {
      const input = 'test';
      expect(() => {
        validator.isInteger(input);
      }).to.throw(`[${input}] is not a number`);
    });
  });
});
