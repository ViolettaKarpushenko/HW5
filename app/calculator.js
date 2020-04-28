/**
 *
 * A simple class containing methods for Add and Multiply numbers
 * @class Calculator
 */
class Calculator {
  /**
    *Creates an instance of Calculator.
    * @memberof Calculator
    */
  constructor() {
  };


  /**
     *
     *
     * @param {Array<Number>} arrayOfNumbers array of numbers to go throgh
     * @return {Number} return result of multiply of all numbers in array
     * @memberof Calculator
     */
  static multiplyNumbers(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
      arrayOfNumbers.every((item) => typeof item === 'number')) {
      // eslint-disable-next-line max-len
      return arrayOfNumbers.reduce((commulativeValue, currentArrayValue) => commulativeValue * currentArrayValue);
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  };

  /**
     *
     *
     * @param {Array<Number>} arrayOfNumbers array of numbers to go throgh
     * @return {Number} return sum of all numbers in array
     * @memberof Calculator
     */
  static sumNumbers(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
      arrayOfNumbers.every((item) => typeof item === 'number')) {
      // eslint-disable-next-line max-len
      return arrayOfNumbers.reduce((commulativeValue, currentArrayValue) => commulativeValue + currentArrayValue);
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  }
}

module.exports = Calculator;
