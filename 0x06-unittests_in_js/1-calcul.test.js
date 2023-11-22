const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("calculateNumber with type ADD", () => {

  it('Calculate is working with integers', () => {
    assert.equal(calculateNumber(2, 3, 'ADD'), 5);
  });

  it('Calculate is working with floats', () => {
    assert.equal(calculateNumber(2, 3.4, 'ADD'), 5);
  });

  it('Calculate is working with floats', () => {
    assert.equal(calculateNumber(2, 3.7, 'ADD'), 6);
  });

  it('working if both floats', () => {
    assert.equal(calculateNumber(1.2, 3.7, 'ADD'), 5);
  });

  it('working if both floats', () => {
    assert.equal(calculateNumber(1.5, 3.7, 'ADD'), 6);
  });

  it('working if one argument is not int or float', () => {
    assert.equal(calculateNumber(1.5, "3.7", 'ADD'), 6);
  });

  it('working if both arguments is not int or float', () => {
    assert.equal(calculateNumber("1.5", "3.7", 'ADD'), 6);
  });

  it('returning nan while rounding string litterals', () => {
    assert.equal(calculateNumber("ali", 3.7, 'ADD'), NaN);
  });

  it('returning nan while rounding arrays', () => {
    assert.equal(calculateNumber([false], 3.7, 'ADD'), NaN);
  });

  it('using lower case type will return undefined', () => {
    assert.equal(calculateNumber([false], 3.7, 'add'), undefined);
  });

});

describe("calculateNumber with type SUBTRACT", () => {

  it('Calculate is working with integers', () => {
    assert.equal(calculateNumber(2, 3, 'SUBTRACT'), -1);
  });

  it('Calculate is working with floats', () => {
    assert.equal(calculateNumber(2, 3.4, 'SUBTRACT'), -1);
  });

  it('Calculate is working with floats', () => {
    assert.equal(calculateNumber(2, 3.7, 'SUBTRACT'), -2);
  });

  it('working if both floats', () => {
    assert.equal(calculateNumber(1.2, 3.7, 'SUBTRACT'), -3);
  });

  it('working if both floats', () => {
    assert.equal(calculateNumber(1.5, 3.7, 'SUBTRACT'), -2);
  });

  it('working if one argument is not int or float', () => {
    assert.equal(calculateNumber(1.5, "3.7", 'SUBTRACT'), -2);
  });

  it('working if both arguments is not int or float', () => {
    assert.equal(calculateNumber("1.5", "3.7", 'SUBTRACT'), -2);
  });

  it('returning nan while rounding string litterals', () => {
    assert.equal(calculateNumber("ali", 3.7, 'SUBTRACT'), NaN);
  });

  it('returning nan while rounding arrays', () => {
    assert.equal(calculateNumber([false], 3.7, 'SUBTRACT'), NaN);
  });

  it('using lower case type will return undefined', () => {
    assert.equal(calculateNumber([false], 3.7, 'subtract'), undefined);
  });

});

describe("calculateNumber with type DIVIDE", () => {

  it('Calculate is working with integers', () => {
    assert.equal(calculateNumber(2, 3, 'DIVIDE').toFixed(2), 0.67);
  });

  it('Calculate is working with floats', () => {
    assert.equal(calculateNumber(2, 3.4, 'DIVIDE').toFixed(2), 0.67);
  });

  it('Calculate is working with floats', () => {
    assert.equal(calculateNumber(2, 3.7, 'DIVIDE'), 0.5);
  });

  it('working if both floats', () => {
    assert.equal(calculateNumber(1.2, 3.7, 'DIVIDE'), 0.25);
  });

  it('working if both floats', () => {
    assert.equal(calculateNumber(1.5, 3.7, 'DIVIDE'), 0.5);
  });

  it('working if one argument is not int or float', () => {
    assert.equal(calculateNumber(1.5, "3.7", 'DIVIDE'), 0.5);
  });

  it('working if both arguments is not int or float', () => {
    assert.equal(calculateNumber("1.5", "3.7", 'DIVIDE'), 0.5);
  });

  it('returning nan while rounding string litterals', () => {
    assert.equal(calculateNumber("ali", 3.7, 'DIVIDE'), NaN);
  });

  it('returning nan while rounding arrays', () => {
    assert.equal(calculateNumber([false], 3.7, 'DIVIDE'), NaN);
  });

  it('using lower case type will return undefined', () => {
    assert.equal(calculateNumber([false], 3.7, 'divide'), undefined);
  });

  it('test should throw error if b == 0', () => {
    assert.throws(() => calculateNumber(5.25, 0, 'DIVIDE'));
  });

  it('test should throw error if rounded b == 0', () => {
    assert.throws(() => calculateNumber(5.25, 0.49, 'DIVIDE'));
  });

  it('test shouldn\'t throw error if rounded b > 0', () => {
    assert.doesNotThrow(() => calculateNumber(5.25, 0.51, 'DIVIDE'));
  });

});
