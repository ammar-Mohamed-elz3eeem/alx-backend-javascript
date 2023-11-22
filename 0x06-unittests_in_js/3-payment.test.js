const sison = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi same logic as calculateNumber', () => {
  let spy;

  before(() => {
    spy = sison.spy(Utils);
    sendPaymentRequestToApi(100, 20);
  });

  it('check function called with specified parameters', () => {
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('check function is called once', () => {
    expect(spy.calculateNumber.callCount).to.be.equal(1);
  });
});
