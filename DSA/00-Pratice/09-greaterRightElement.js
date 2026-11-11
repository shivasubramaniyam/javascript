// replace element with great element on right

const input = [17, 18, 5, 4, 6, 1];
output = [18, 6, 6, 6, 1, -1];

function GreaterRightElement(input) {
  const a = [...input];
  const n = a.length;
  let max = -1;
  for (let i = n - 1; i >= 0; i--) {
    const current = a[i];
    a[i] = max;
    if (current > max) {
      max = current;
    }
  }
  return a;
}

console.log(GreaterRightElement(input));
