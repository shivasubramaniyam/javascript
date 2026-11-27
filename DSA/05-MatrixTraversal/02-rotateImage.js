/** Rotate Image - medium - leetcode - 48
 * input : [[1,2,3]
 *          [4,5,6]
 *          [7,8,9]
 * ];
 * output : [[7,4,1]
 *          [8,5,2]
 *          [9,6,3]
 * ];
 *
 * put the first row to last column, but take space of O(nxn)
 * for the changing it in-place we need to take to the 2 steps
 * 1. transpose - swap all the index in the matrix
 * 2. reverse
 */

function RotateImage(input) {
  const m = input.length;
  const n = m;

  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      [input[i][j], input[j][i]] = [input[j][i], input[i][j]];
    }
  }

  for (let i = 0; i < m; i++) {
    input[i].reverse();
  }

  return input;
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(RotateImage(input));
