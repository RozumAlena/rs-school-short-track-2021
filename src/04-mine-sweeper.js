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
  let sum = 0; const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      sum = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let p = j - 1; p <= j + 1; p++) {
          if ((k >= 0 && k < matrix.length)
                  && (p >= 0 && p < matrix[0].length)) {
            sum += +matrix[k][p];
          }
        }
      }
      arr[i].push(sum - Number(matrix[i][j]));
    }
  }
  return arr;
}

module.exports = minesweeper;
