const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('check add and multiply functions for calculator', function() {
  it('Multiply: should return 60', function() {
    expect(Calculator.multiplyNumbers([2, 6, 5])).to.be.equal(60);
  });
  it('Sum: should return 23', function() {
    expect(Calculator.sumNumbers([2, 16, 5])).to.be.equal(23);
  });
  it('Multiply: should return 0', function() {
    expect(Calculator.multiplyNumbers([2, 0, 5])).to.be.equal(0);
  });
  it('Sum: should return -5', function() {
    expect(Calculator.sumNumbers([0, -10, 5])).to.be.equal(-5);
  });
});
