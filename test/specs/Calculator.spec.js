const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('check add and multiply functions for calculator', function() {
  it('Multiply: should return 60', function() {
    expect(Calculator.multiplyNumbers(2, 6, 5)).to.be.equal(60);
  });
  it('Multiply: should return 0', function() {
    expect(Calculator.multiplyNumbers(2, 0, 5)).to.be.equal(0);
  });
  it('Multiply: should return Error: is not an array of "Numbers"', function() {
    // eslint-disable-next-line max-len
    expect(() => Calculator.multiplyNumbers(0, -10, 5, 'o')).to.throw(`[0,-10,5,o] is not an array of "Numbers"`);  
  });
  it('Sum: should return 23', function() {
    expect(Calculator.sumNumbers(2, 16, 5)).to.be.equal(23);
  });
  it('Sum: should return -5', function() {
    expect(Calculator.sumNumbers(0, -10, 5)).to.be.equal(-5);
  });
  it('Sum: should return Error: is not an array of "Numbers"', function() {
    // eslint-disable-next-line max-len
    expect(() => Calculator.sumNumbers('a', -10, 5)).to.throw(`[a,-10,5] is not an array of "Numbers"`);  
  });
});
