/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = n;
  let arr = [];
  let sum = 0;
  do {
    arr = num.toString().split('');
    sum = arr.reduce((acc, item) => Number(acc) + Number(item));
    num = sum;
  }
  while (sum > 9);
  return sum;
}

module.exports = getSumOfDigits;
