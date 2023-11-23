const sinon = require('sinon');
const chai = require('chai');
const req = require('request');

describe('IndexPage tests', () => {
  it('test that send is called with specifiec message', (done) => {
    req.get('http://127.0.0.1:7865', (err, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
