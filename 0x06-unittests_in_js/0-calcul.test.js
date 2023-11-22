const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber", function () {

  it('Calculate is working with integers', function () {
    assert.equal(calculateNumber(2, 3), 5);
  });

  it('Calculate is working with floats', function () {
    assert.equal(calculateNumber(2, 3.4), 5);
  });

  it('Calculate is working with floats', function () {
    assert.equal(calculateNumber(2, 3.7), 6);
  });

  it('working if both floats', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('working if both floats', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('working if one argument is not int or float', function () {
    assert.equal(calculateNumber(1.5, "3.7"), 6);
  });

  it('working if both arguments is not int or float', function () {
    assert.equal(calculateNumber("1.5", "3.7"), 6);
  });

  it('returning nan while rounding string litterals', function () {
    assert.equal(calculateNumber("ali", 3.7), NaN);
  });

  it('returning nan while rounding arrays', function () {
    assert.equal(calculateNumber([false], 3.7), NaN);
  });

});
