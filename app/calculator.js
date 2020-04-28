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
   * @return {Number} multiply of numbers
   * @memberof Calculator
   */
  multiplyNumbers(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers)) {
      let multiplyResult=1;
      for (let i=0; i<arrayOfNumbers.length; i++) {
        multiplyResult = multiplyResult * arrayOfNumbers[i];
      }
      return multiplyResult;
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  };

  /**
   *
   *
   * @param {Array<Number>} arrayOfNumbers array of numbers to go throgh
   * @return {Number} addition of numbers
   * @memberof Calculator
   */
  addNumbers(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers)) {
      let addResult=1;
      for (let i=0; i<arrayOfNumbers.length; i++) {
        addResult = addResult + arrayOfNumbers[i];
      }
      console.log(`addResult: ${addResult}`);

 //     return addResult;
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  }
}

module.export = Calculator;
