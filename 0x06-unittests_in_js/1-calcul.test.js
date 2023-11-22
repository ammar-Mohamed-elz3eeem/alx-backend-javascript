const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type = "ADD"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber(2.0, 2.0, 'ADD'), 4);
    });
    it('equal positive numbers (one rounded to smallest & one rounded to biggest)', () => {
      assert.strictEqual(calculateNumber(2.7, 2.3, 'ADD'), 5);
    });
    it('one positive & one negative number', () => {
      assert.strictEqual(calculateNumber(-2.0, 2.0, 'ADD'), 0);
    });
    it('one positive rounded to smallest & one negative number rounded to biggest', () => {
      assert.strictEqual(calculateNumber(2.7, -2.3, 'ADD'), 1);
    });
    it('equal netive numbers', () => {
      assert.strictEqual(calculateNumber(-2.0, -2.0, 'ADD'), -4);
    });
    it('equal netive numbers (one rounded to smallest & one rounded to biggest)', () => {
      assert.strictEqual(calculateNumber(-2.7, -2.3, 'ADD'), -5);
    });
    it('0 + 0 = 0', () => {
      assert.strictEqual(calculateNumber(0.0, 0.0, 'ADD'), 0);
    });
    it('test with add lowercase', () => {
      assert.strictEqual(calculateNumber(0.0, 0.0, 'add'), 0);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber(2.0, 2.0, 'SUBTRACT'), 0);
    });
    it('equal positive numbers (one rounded to smallest & one rounded to biggest)', () => {
      assert.strictEqual(calculateNumber(2.7, 2.3, 'SUBTRACT'), 1);
    });
    it('one positive & one negative number', () => {
      assert.strictEqual(calculateNumber(-2.0, 2.0, 'SUBTRACT'), -4);
    });
    it('one positive rounded to smallest & one negative number rounded to biggest', () => {
      assert.strictEqual(calculateNumber(2.7, -2.3, 'SUBTRACT'), 5);
    });
    it('equal netive numbers', () => {
      assert.strictEqual(calculateNumber(-2.0, -2.0, 'SUBTRACT'), 0);
    });
    it('equal netive numbers (one rounded to smallest & one rounded to biggest)', () => {
      assert.strictEqual(calculateNumber(-2.7, -2.3, 'SUBTRACT'), -1);
    });
    it('0 + 0 = 0', () => {
      assert.strictEqual(calculateNumber(0.0, 0.0, 'SUBTRACT'), 0);
    });
    it('test with subtract lowercase', () => {
      assert.strictEqual(calculateNumber(0.0, 0.0, 'subtract'), 0);
    });
  });
  describe('type = "DIVIDE"', () => {
    it('using lower case type will return 0', () => {
      assert.strictEqual(calculateNumber([false], 3.7, 'divide'), 0);
    });
    it('test should throw error if b == 0', () => {
      assert.strictEqual(calculateNumber(5.25, 0, 'DIVIDE'), 'Error');
    });
    it('test should throw error if rounded b == 0', () => {
      assert.strictEqual(calculateNumber(5.25, 0.49, 'DIVIDE'), 'Error');
    });
    it('test shouldn\'t throw error if rounded b > 0', () => {
      assert.notStrictEqual(calculateNumber(5.25, 0.51, 'DIVIDE'), 'Error');
    });
  });
});
