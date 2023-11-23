const sison = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('change impl of sendPaymentRequestToApi', () => {
    const stub = sison.stub(Utils, "calculateNumber").returns(10);
    const spy = sison.spy(console);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.log.callCount).to.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.log.restore();
  });
});
