const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('check add and multiply functions for calculator', function() {

  it('should return 60', function() {
    expect(Calculator.multiplyNumbers([2, 6, 5])).to.be.equal(60);
  });

});
