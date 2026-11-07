/** leetcode 3 -medium
 *
 * input : "cadbzabcd"
 * output : (return the consecutive substring without repeating a character)
 *
 * approach :
 * create the sliding window where we are going to slide the window
 */

function lengthOfLongestSubstring(shiv) {
  const n = shiv.length;
  const CharMap = new Map();
  let max_length = 0;
  let i = 0,
    result = [];
  for (let j = 0; j < n; j++) {
    const currentChar = shiv[j];
    // If the character was seen before AND is inside our current window
    if (CharMap.has(currentChar) && CharMap.get(currentChar) >= i) {
      // Move the left pointer past the last seen duplicate character
      i = CharMap.get(currentChar) + 1;
    }
    // Record/update the current character's index
    CharMap.set(currentChar, j);
    max_length = Math.max(j - i + 1, max_length);
  }

  return max_length;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("tmmzuxt"));
