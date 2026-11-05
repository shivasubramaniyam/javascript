/**Given an array of integers temperatures representing daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the i-th day to get a warmer temperature. If there is no future day with a warmer temperature, set answer[i] == 0.
* Example 1:
	• Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
	• Output: [1, 1, 4, 2, 1, 1, 0, 0]

    Example 2:
    • Input: temperatures = [30, 40, 50, 60]
    • Output: [1, 1, 1, 0]


    approach : 
    create the result and stack,span for the code 


    
*/

function dailyTemperature(input) {
  const n = input.length;
  const result = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && input[i] > input[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return result;
}

const temp = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperature(temp));

//brute force approach by i,j --> time complexity o(n2)

function dailyTemperatureBF(input) {
  const n = input.length;
  const res = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (input[j] > input[i]) {
        res[i] = j - i;
        break;
      }
    }
  }
  return res;
}

console.log(dailyTemperatureBF(temp));
