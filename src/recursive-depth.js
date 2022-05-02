const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // const arrString = [...JSON.stringify(arr)].filter(i => (i == "[" || i == "]")).join("")

    // let len = 0
    // const arrOfLen = []
    // for (let i = 1; i < arrString.length; i++) {
    //   if (arrString[i] === '[') {
    //     len++
    //   } else {
    //     arrOfLen.push(len + 1)
    //     len = 0
    //   }
    // }
    // arrOfLen.sort((a, b) => b - a)
    // if (arrOfLen.length == 0) {
    //   return 1
    // }
    // return (arrOfLen[0])

    let count = 1
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count += this.calculateDepth(arr.flat())
        break
      }
    }
    return count
  }
}

module.exports = {
  DepthCalculator
};
