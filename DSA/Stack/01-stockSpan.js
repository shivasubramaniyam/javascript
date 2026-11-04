/**stack problem
 *  online stock span -medium level -901
 * input = [100,80,60,70,60,75,85]
 * output = {1,1,1,2,1,4,6}
 * consider input is the stock of each day, we need to return the number that is equal or less then todays stock
 * we are going to compare the list to left side not right side
 *
 * approach :
 * 1st add 100 and span to the stack (100,1) as 100 as the only 1 span
 * 2nd add 80 and span to the stack (80,1) as 100 as the only 1 span
 * 3rd add 60 and span to the stack (60,1) as 100 as the only 1 span
 * 4th check 70 with the top item, it is less so add the span to the 70 and pop the top => 60
 * 5th check 60 with the top item, it is great so add to the stack
 * 6th check 75 with the top item, it is less so add the top span to the existing item and pop the top and add new (75,4) to stack
 *
 * initially span = 1 for all the element
 * while(s.empty && st.top.first <= price){
 * span = span + st.top().second
 * st.pop()
 * }
 * s.push({price,span})
 * return span
 * */

// similar question leetcode -739

//learn monotonic stack

function stockSpan(prices) {
  const stack = [];
  const result = [];

  for (const price of prices) {
    let span = 1;
    while (stack.length > 0 && stack[stack.length - 1][0] <= price) {
      span += stack[stack.length - 1][1];
      stack.pop();
    }

    stack.push([price, span]);
    result.push(span);
  }
  return result;
}
const input = [100, 80, 60, 70, 60, 75, 85];
console.log(stockSpan(input));
