const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((e, i, arr) => {
    sum += e.reduce((a, c, j) => (i === 0 || arr[i - 1][j] !== 0 ? a + c : a), 0);
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
