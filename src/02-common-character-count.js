/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str1 = s1;
  let str2 = s2;
  let n1 = 0;
  let n2 = 0;
  let uni = 0;
  let sum = 0;
  while (str1.length > 0 && str2.length > 0) {
    const letter = str1[0];
    n1 = str1.split('').filter((item) => item === letter).length;
    n2 = str2.split('').filter((item) => item === letter).length;
    uni = Math.min(n1, n2);
    sum += uni;
    const regexp = new RegExp(letter, 'g');
    str1 = str1.replace(regexp, '');
    str2 = str2.replace(regexp, '');
  }
  return sum;
}

module.exports = getCommonCharacterCount;
