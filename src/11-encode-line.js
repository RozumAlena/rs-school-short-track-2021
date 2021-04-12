/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(stst) {
  let str = stst;
  let newStr = ''; let num = 0;
  for (let i = 0; i < str.length;) {
    const letter = str[i];
    num = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === letter) {
        num += 1;
      } else {
        break;
      }
    }
    str = str.replace(letter.repeat(num), '');
    num = (num !== 1) ? num : '';
    newStr += (num + letter);
  }
  return newStr;
}

module.exports = encodeLine;
