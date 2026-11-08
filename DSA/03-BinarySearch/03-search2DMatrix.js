/**To search for an element in a fully sorted 2D matrix efficiently using binary search, the optimal approach is to treat the 2D matrix as a flattened 1D sorted array.
 This allows you to perform a single binary search across the entire matrix, achieving a time complexity of \(O(\log(m \times n))\) and a space complexity of O(1).
 
 The Mapping Formula
 
 For an m × n matrix (where m is the number of rows and n is the number of columns), a virtual 1D index mid can be mapped back to its actual 2D coordinates (row, col) using basic math 
 approach:
 in the matrix we have i(row) and j(col) 
 start with i=0,j=n-1 
 if the target is > great then increment i 
 else decrement j

 for matrix mid to 1D mid conversion logic is that 
[]             []
mid/n(col)    mid%n


eg :in 1d, mid = 8, 
in 2d , mid/n = 2 , mid%n = 0 => [2][0]


so the logic goes like if(matrix[mid/2][mid%2] > target)
end = mid-1

else if(matrix[mid/2][mid%2] < target)

    start = mid+1
else 
    return true
 */

//o(n2)
function search2DMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let i = 0,
    j = n - 1;
  while (i < m && j >= 0) {
    if (matrix[i][j] > target) {
      j--;
    } else if (matrix[i][j] < target) {
      i++;
    } else {
      return true;
    }
  }
  return false;
}

// o(log n)

function search2DMatrix1(matrix, target) {
  if (!matrix || matrix.length === 0 || !matrix[0] || matrix[0].length === 0) {
    return false;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let start = 0;
  let end = m * n - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2); // 1d calculation

    //2d calculation
    let row = Math.floor(mid / n);
    let col = Math.floor(mid % n);
    if (matrix[row][col] > target) {
      end = mid - 1;
    } else if (matrix[row][col] < target) {
      start = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}

// Test Matrix: A fully sorted 3x4 matrix
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
// Target to find
const target = 3;

console.log(search2DMatrix(matrix, target));
