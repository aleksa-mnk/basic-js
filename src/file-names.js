const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  const _names = [...names];
  for (let i = 0; i < _names.length; i++) {
    let count = _names.slice(0, i).filter(el => el === _names[i] || new RegExp(`^${_names[i]}\\(\\d\\)$`).test(el)).length;
    if (count === 0) continue;
    else _names[i] += `(${count})`;
  }
  return _names;
}


module.exports = {
  renameFiles
};
