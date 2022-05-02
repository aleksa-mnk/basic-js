const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  const result = [...matrix].map(row => row.map(() => 0));
  const dirX = [-1, 1, 0, 0, -1, 1, -1, 1];
  const dirY = [0, 0, -1, 1, -1, -1, 1, 1];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      for (let k = 0; k < 8; k++) {
        if (j + dirX[k] > -1 && j + dirX[k] < result[i].length && i + dirY[k] > -1 && i + dirY[k] < result.length) {
          if (matrix[i + dirY[k]][j + dirX[k]]) result[i][j] += 1;
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
