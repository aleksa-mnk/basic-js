const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const chars = n.toString().split('')
  let mainArr = []
  chars.forEach((element, index) => {
    let arr = [...chars]
    arr.splice(index, 1)
    mainArr.push(+arr.join(''))
  })
  mainArr.sort((a, b) => b - a)
  return mainArr[0]
}

module.exports = {
  deleteDigit
};
