const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.equal(calculateNumber(2.0, 3.0), 5);
  })
  
  it('calculate is working with floats', () => {
    assert.equal(calculateNumber(2, 3.4), 5);
  });

  it('calculate is working with integers', () => {
    assert.equal(calculateNumber(2, 3), 5);
  });


  it('calculate is working with floats', () => {
    assert.equal(calculateNumber(2, 3.7), 6);
  });

  it('working if both floats', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('working if both floats', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('working if one argument is not int or float', () => {
    assert.equal(calculateNumber(1.5, "3.7"), 6);
  });

  it('working if both arguments is not int or float', () => {
    assert.equal(calculateNumber("1.5", "3.7"), 6);
  });

  it('returning nan while rounding string litterals', () => {
    assert.equal(calculateNumber("ali", 3.7), NaN);
  });

  it('returning nan while rounding arrays', () => {
    assert.equal(calculateNumber([false], 3.7), NaN);
  });
});
