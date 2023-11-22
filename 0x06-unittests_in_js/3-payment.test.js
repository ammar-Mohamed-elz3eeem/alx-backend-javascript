const sison = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('check function called with specified parameters', () => {
    let spy = sison.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    spy.calculateNumber.restore();
  });

  it('check function is called once', () => {
    let spy = sison.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
