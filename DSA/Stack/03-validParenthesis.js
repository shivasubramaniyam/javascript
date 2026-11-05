/** return a valid parenthesis code
 * input : "{{(())}}"" all the opening level and closing level of the parenthesis is same
 * output : true
 *
 * input 1: "{[)]} the same opening bracket is not proper in the code
 * output : false
 *
 * approach :
 * take empty stack and an object named validPairs for verification
 * in for loop, if opening bracket, push to the stack
 * if we encounter the closing bracket, pop from the last element and compare with the validPairs
 * if the object value doesn;t match then return false
 * else return true through emptiness in the stack
 */

function validParenthesis(s) {
  const stack = [];
  const validPairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let k = 0; k < s.length; k++) {
    if (s[k] === "(" || s[k] === "[" || s[k] === "{") {
      stack.push(s[k]);
    }
    if (s[k] === ")" || s[k] === "]" || s[k] === "}") {
      let topEle = stack.pop();
      if (topEle !== validPairs[s[k]]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validParenthesis("{{()}}"));
