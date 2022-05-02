const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

const createDreamTeam = (arr) => {
  return !Array.isArray(arr) ? false : arr.map(m => (typeof m === 'string' ? m.trim().toUpperCase()[0] : '')).sort().join('')
}

module.exports = {
  createDreamTeam
};
