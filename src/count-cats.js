const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const countCats = (arr) => {
  let answ = 0
  arr.forEach(element => {
    element.forEach(e => {
      if(e == '^^'){
        answ++
      }
    })
  })
  return answ
}

module.exports = {
  countCats
};
