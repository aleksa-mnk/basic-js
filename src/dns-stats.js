const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

//  assert.deepEqual(getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 });
//  assert.deepEqual(getDNSStats(['epam.com', 'info.epam.com']), { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });


function getDNSStats(domains) {
  let dns = {};
  domains.forEach(element => {
    const parts = element.split('.');
    parts[parts.length - 1] = '.' + parts[parts.length - 1];
    parts.reverse();
    for (let i = 0; i < parts.length; i++) {
      const part = parts.slice(0, i + 1).join('.');
      if(!dns[part]){
        dns[part] = 1
      }else {
        dns[part] += 1
      }
      // dns[part] = !dns[part] ? dns[part] + 1 : 1;
    }
  });
  return dns;
}

module.exports = {
  getDNSStats
};
