const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type = "ADD"', () => {
    it('Calculate is working with integers', () => {
      expect(calculateNumber('ADD', 2.0, 3.0)).to.equal(5);
    });

    it('Calculate is working with floats', () => {
      expect(calculateNumber('ADD', 2.0, 3.4)).to.equal(5);
    });

    it('1 negative + 1 positive', () => {
      expect(calculateNumber('ADD', 2.0, -3.4)).to.equal(-1);
    });

    it('both negative numbers', () => {
      expect(calculateNumber('ADD', -2.0, -3.4)).to.equal(-5);
    });

    it('Calculate is working with floats', () => {
      expect(calculateNumber('ADD', 2.0, 3.7)).to.equal(6);
    });

    it('working if both floats', () => {
      expect(calculateNumber('ADD', 1.2, 3.7)).to.equal(5);
    });

    it('working if both floats', () => {
      expect(calculateNumber('ADD', 1.5, 3.7)).to.equal(6);
    });

    it('0 + 0', () => {
      expect(calculateNumber('ADD', 0.0, 0.0)).to.equal(0);
    });

    it('both numbers rounded to 0', () => {
      expect(calculateNumber('ADD', 0.49, 0.49)).to.equal(0);
    });

    it('using lower case type will return undefined', () => {
      expect(calculateNumber('add', 4.0, 3.7)).to.equal(0);
    });
  });

  describe('type = "SUBTRACT"', () => {
    it('Calculate is working with integers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 3.0)).to.equal(-1);
    });

    it('Calculate is working with floats', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 3.4)).to.equal(-1);
    });

    it('two negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -3.4)).to.equal(1);
    });

    it('a postive b negative', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -3.4)).to.equal(5);
    });

    it('b postive a negative', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 3.4)).to.equal(-5);
    });

    it('Calculate is working with floats', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 3.7)).to.equal(-2);
    });

    it('working if both floats', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('working if both floats', () => {
      expect(calculateNumber('SUBTRACT', 1.52, 3.71)).to.equal(-2);
    });

    it('using lower case type will return undefined', () => {
      expect(calculateNumber('subtract', 5.0, 3.7)).to.equal(0);
    });
  });

  describe('type = "DIVIDE"', () => {
    it('Calculate is working with integers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 3.0).toFixed(2)).to.equal('0.67');
    });
  
    it('Calculate is working with floats', () => {
      expect(calculateNumber('DIVIDE', 2.0, 3.4).toFixed(2)).to.equal('0.67');
    });
  
    it('Calculate is working with floats', () => {
      expect(calculateNumber('DIVIDE', 2.0, 3.7)).to.equal(0.50);
    });
  
    it('working if both floats', () => {
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });
  
    it('working if both floats', () => {
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.50);
    });
  
    it('using lower case type will return undefined', () => {
      expect(calculateNumber('divide', 50.0, 3.7)).to.equal(0);
    });
  
    it('test should throw error if b == 0', () => {
      expect(calculateNumber('DIVIDE', 5.25, 0.0)).to.equal('Error');
    });
  
    it('test should throw error if rounded b == 0', () => {
      expect(calculateNumber('DIVIDE', 5.25, 0.49)).to.equal('Error');
    });

    it('divide negtive number by positive number', () => {
      expect(calculateNumber('DIVIDE', -50.0, 10.0)).to.equal(-5);
    });

    it('divide positive number by negtive number', () => {
      expect(calculateNumber('DIVIDE', 50.0, -10.0)).to.equal(-5);
    });

    it('divide two negative numbers', () => {
      expect(calculateNumber('DIVIDE', -50.0, -10.0)).to.equal(5);
    });

    it('divide 0 over positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 10.0)).to.equal(0);
    });

    it('divide 0 over negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -10.0)).to.equal(-0);
    });
  
    it('test shouldn\'t throw error if rounded b > 0', () => {
      expect(calculateNumber('DIVIDE', 5.25, 0.51)).to.be.not.equal('Error');
    });
  });
});
