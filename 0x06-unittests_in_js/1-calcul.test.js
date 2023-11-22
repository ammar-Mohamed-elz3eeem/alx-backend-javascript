const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type = "SUM"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('equal positive numbers (one rounded to smallest & one rounded to biggest)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.7, 2.3), 5);
    });

    it('one positive & one negative number', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('one positive rounded to smallest & one negative number rounded to biggest', () => {
      assert.strictEqual(calculateNumber('SUM', 2.7, -2.3), 1);
    });

    it('equal netive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('equal netive numbers (one rounded to smallest & one rounded to biggest)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.7, -2.3), -5);
    });

    it('0 + 0 = 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });

    it('test with sum lowercase', () => {
      assert.strictEqual(calculateNumber('sum', 0.0, 0.0), 0);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('equal positive numbers (one rounded to smallest & one rounded to biggest)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 2.3), 1);
    });

    it('one positive & one negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4);
    });

    it('one positive rounded to smallest & one negative number rounded to biggest', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, -2.3), 5);
    });

    it('equal netive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('equal netive numbers (one rounded to smallest & one rounded to biggest)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.7, -2.3), -1);
    });

    it('0 + 0 = 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });

    it('test with subtract lowercase', () => {
      assert.strictEqual(calculateNumber('subtract', 0.0, 0.0), 0);
    });
  });
  describe('type = "DIVIDE"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 2.0), 1.5);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, -2.0), 1.5);
    });

    it('a negative & b positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, 2.0), -1.5);
    });

    it('a = 0 & b positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 2.0), 0);
    });

    it('a = 0 & b negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -2.0), -0);
    });

    it('b negative & a positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, -2.0), -1.5);
    });

    it('test should throw error if b == 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.25, 0), 'Error');
    });

    it('test should throw error if rounded b == 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.25, 0.49), 'Error');
    });

    it('test shouldn\'t throw error if rounded b > 0', () => {
      assert.notStrictEqual(calculateNumber('DIVIDE', 5.25, 0.51), 'Error');
    });

    it('0 / 0 = "Error"', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
