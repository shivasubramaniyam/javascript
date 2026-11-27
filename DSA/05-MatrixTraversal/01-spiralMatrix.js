function SpiralMatrix(input) {
  if (!input.length) return [];

  const m = input.length;
  const n = input[0].length;

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  let dir = 0;
  const result = [];

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      // left to right (constant: top)
      for (let i = left; i <= right; i++) {
        result.push(input[top][i]);
      }
      top++;
    } else if (dir === 1) {
      // top to bottom (constant: right)
      for (let i = top; i <= bottom; i++) {
        result.push(input[i][right]);
      }
      right--;
    } else if (dir === 2) {
      // right to left (constant: bottom)
      for (let i = right; i >= left; i--) {
        result.push(input[bottom][i]);
      }
      bottom--;
    } else if (dir === 3) {
      // bottom to top (constant: left)
      for (let i = bottom; i >= top; i--) {
        result.push(input[i][left]);
      }
      left++;
    }

    dir = (dir + 1) % 4;
  }

  return result;
}

console.log(
  SpiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
