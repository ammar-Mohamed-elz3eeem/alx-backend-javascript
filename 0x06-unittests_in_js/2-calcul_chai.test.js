const chai = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type = "ADD"', () => {
    it('Calculate is working with integers', () => {
      chai.expect(calculateNumber('ADD', 2, 3)).to.be.equal(5);
    });

    it('Calculate is working with floats', () => {
      chai.expect(calculateNumber('ADD', 2, 3.4)).to.be.equal(5);
    });

    it('Calculate is working with floats', () => {
      chai.expect(calculateNumber('ADD', 2, 3.7)).to.be.equal(6);
    });

    it('working if both floats', () => {
      chai.expect(calculateNumber('ADD', 1.2, 3.7)).to.be.equal(5);
    });

    it('working if both floats', () => {
      chai.expect(calculateNumber('ADD', 1.5, 3.7)).to.be.equal(6);
    });

    it('using lower case type will return undefined', () => {
      chai.expect(calculateNumber('add', 4, 3.7)).to.be.equal(0);
    });
  });

  describe('type = "SUBTRACT"', () => {
    it('Calculate is working with integers', () => {
      chai.expect(calculateNumber('SUBTRACT', 2, 3)).to.be.equal(-1);
    });

    it('Calculate is working with floats', () => {
      chai.expect(calculateNumber('SUBTRACT', 2, 3.4)).to.be.equal(-1);
    });

    it('Calculate is working with floats', () => {
      chai.expect(calculateNumber('SUBTRACT', 2, 3.7)).to.be.equal(-2);
    });

    it('working if both floats', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.be.equal(-3);
    });

    it('working if both floats', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.52, 3.71)).to.be.equal(-2);
    });

    it('using lower case type will return undefined', () => {
      chai.expect(calculateNumber('subtract', 5, 3.7)).to.be.equal(0);
    });
  });

  describe('type = "DIVIDE"', () => {
    it('Calculate is working with integers', () => {
      chai.expect(calculateNumber('DIVIDE', 2, 3).toFixed(2)).to.be.equal('0.67');
    });
  
    it('Calculate is working with floats', () => {
      chai.expect(calculateNumber('DIVIDE', 2, 3.4).toFixed(2)).to.be.equal('0.67');
    });
  
    it('Calculate is working with floats', () => {
      chai.expect(calculateNumber('DIVIDE', 2, 3.7)).to.be.equal(0.50);
    });
  
    it('working if both floats', () => {
      chai.expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.be.equal(0.25);
    });
  
    it('working if both floats', () => {
      chai.expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.be.equal(0.50);
    });
  
    it('using lower case type will return undefined', () => {
      chai.expect(calculateNumber('divide', 50, 3.7)).to.be.equal(0);
    });
  
    it('test should throw error if b == 0', () => {
      chai.expect(calculateNumber('DIVIDE', 5.25, 0)).to.be.equal('Error');
    });
  
    it('test should throw error if rounded b == 0', () => {
      chai.expect(calculateNumber('DIVIDE', 5.25, 0.49)).to.be.equal('Error');
    });
  
    it('test shouldn\'t throw error if rounded b > 0', () => {
      chai.expect(calculateNumber('DIVIDE', 5.25, 0.51)).to.be.not.equal('Error');
    });
  });
});
