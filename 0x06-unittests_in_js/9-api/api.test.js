const sinon = require('sinon');
const chai = require('chai');
const req = require('request');
const API = 'http://127.0.0.1:7865';

describe('IndexPage tests', () => {
  it('test that send is called with specifiec message', (done) => {
    req.get(API, (err, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('cart tests', () => {
  it('test with valid number', (done) => {
    req.get(`${API}/cart/50`, (_, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
      chai.expect(body).to.equal('Payment methods for cart 50');
      done();
    });
  });

  it('test with invalid number', (done) => {
    req.get(`${API}/cart/50F50`, (_, res, body) => {
      chai.expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
