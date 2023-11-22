const chai = require('chai');
const calculateNumber = require('./1-calcul');

describe("calculateNumber with type ADD", () => {

  it('Calculate is working with integers', () => {
    chai.expect(calculateNumber(2, 3, 'ADD')).equal(5);
  });

  it('Calculate is working with floats', () => {
    chai.expect(calculateNumber(2, 3.4, 'ADD')).equal(5);
  });

  it('Calculate is working with floats', () => {
    chai.expect(calculateNumber(2, 3.7, 'ADD')).equal(6);
  });

  it('working if both floats', () => {
    chai.expect(calculateNumber(1.2, 3.7, 'ADD')).equal(5);
  });

  it('working if both floats', () => {
    chai.expect(calculateNumber(1.5, 3.7, 'ADD')).equal(6);
  });

  it('working if one argument is not int or float', () => {
    chai.expect(calculateNumber(1.5, "3.7", 'ADD')).equal(6);
  });

  it('working if both arguments is not int or float', () => {
    chai.expect(calculateNumber("1.5", "3.7", 'ADD')).equal(6);
  });

  it('returning nan while rounding string litterals', () => {
    chai.expect(calculateNumber("ali", 3.7, 'ADD')).to.be.NaN;
  });

  it('returning nan while rounding arrays', () => {
    chai.expect(calculateNumber([false], 3.7, 'ADD')).to.be.NaN;
  });

  it('using lower case type will return undefined', () => {
    chai.expect(calculateNumber([false], 3.7, 'add')).to.be.undefined;
  });

});

describe("calculateNumber with type SUBTRACT", () => {

  it('Calculate is working with integers', () => {
    chai.expect(calculateNumber(2, 3, 'SUBTRACT')).to.be.equal(-1);
  });

  it('Calculate is working with floats', () => {
    chai.expect(calculateNumber(2, 3.4, 'SUBTRACT')).to.be.equal(-1);
  });

  it('Calculate is working with floats', () => {
    chai.expect(calculateNumber(2, 3.7, 'SUBTRACT')).to.be.equal(-2);
  });

  it('working if both floats', () => {
    chai.expect(calculateNumber(1.2, 3.7, 'SUBTRACT')).to.be.equal(-3);
  });

  it('working if both floats', () => {
    chai.expect(calculateNumber(1.52, 3.71, 'SUBTRACT')).to.be.equal(-2);
  });

  it('working if one argument is not int or float', () => {
    chai.expect(calculateNumber(1.5, "3.7", 'SUBTRACT')).to.be.equal(-2);
  });

  it('working if both arguments is not int or float', () => {
    chai.expect(calculateNumber("1.5", "3.7", 'SUBTRACT')).to.be.equal(-2);
  });

  it('returning nan while rounding string litterals', () => {
    chai.expect(calculateNumber("ali", "3.7", 'SUBTRACT')).to.be.NaN;
  });

  it('returning nan while rounding arrays', () => {
    chai.expect(calculateNumber([false], "3.7", 'SUBTRACT')).to.be.NaN;
  });

  it('using lower case type will return undefined', () => {
    chai.expect(calculateNumber([false], 3.7, 'subtract')).to.be.undefined;
  });

});

describe("calculateNumber with type DIVIDE", () => {

  it('Calculate is working with integers', () => {
    chai.expect(calculateNumber(2, 3, 'DIVIDE').toFixed(2)).to.be.equal('0.67');
  });

  it('Calculate is working with floats', () => {
    chai.expect(calculateNumber(2, 3.4, 'DIVIDE').toFixed(2)).to.be.equal('0.67');
  });

  it('Calculate is working with floats', () => {
    chai.expect(calculateNumber(2, 3.7, 'DIVIDE')).to.be.equal(0.50);
  });

  it('working if both floats', () => {
    chai.expect(calculateNumber(1.2, 3.7, 'DIVIDE')).to.be.equal(0.25);
  });

  it('working if both floats', () => {
    chai.expect(calculateNumber(1.5, 3.7, 'DIVIDE')).to.be.equal(0.50);
  });

  it('working if one argument is not int or float', () => {
    chai.expect(calculateNumber(1.5, "3.7", 'DIVIDE')).to.be.equal(0.50);
  });

  it('working if both arguments is not int or float', () => {
    chai.expect(calculateNumber("1.5", "3.7", 'DIVIDE')).to.be.equal(0.50);
  });

  it('returning nan while rounding string litterals', () => {
    chai.expect(calculateNumber("ali", 3.7, 'DIVIDE')).to.be.NaN;
  });

  it('returning nan while rounding arrays', () => {
    chai.expect(calculateNumber([false], 3.7, 'DIVIDE')).to.be.NaN;
  });

  it('using lower case type will return undefined', () => {
    chai.expect(calculateNumber([false], 3.7, 'divide')).to.be.undefined;
  });

  it('test should throw error if b == 0', () => {
    chai.expect(calculateNumber(5.25, 0, 'divide')).to.throw;
  });

  it('test should throw error if rounded b == 0', () => {
    chai.expect(calculateNumber(5.25, 0.49, 'divide')).to.throw;
  });

  it('test shouldn\'t throw error if rounded b > 0', () => {
    chai.expect(calculateNumber(5.25, 0.51, 'divide')).to.not.throw;
  });
});
