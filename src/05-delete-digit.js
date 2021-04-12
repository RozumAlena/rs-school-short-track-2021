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
  const str = n.toString();
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.replace(str[i], ''));
  }
  return Math.max.apply(null, arr);
}

module.exports = deleteDigit;
