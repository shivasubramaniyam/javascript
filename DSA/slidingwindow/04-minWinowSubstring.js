/** minimum window sub string
 *
 * hard level
 * inputs  s = [a,d,o,b,e,c,o,d,e,b,a,n,c] t = [a,b,c]
 *
 * output = [b,a,n,c]
 *
 * approach :
 * create the map for each elemnt in t value and count_req = 3(in this case)
 * start i and j in the starting element and we are going to move j first
 * we are going to change 0 to 1 for character present in t
 * if the a[j] present in the map function, we are going to convert to 0 again and decrement the countreq
 *
 * if the element encountered are not present in the map function we are still going to add it and value would be -1
 *
 * while shifting i, if the map is value is present
 * need to increment map to 1 and count by 1
 * leetcode - hard - sliding window

 */

function minWindow(s, t) {
  const n = s.length;
  const tl = t.length;

  if (tl > n || n === 0) return "";
  // Size 128 covers standard ASCII (both uppercase and lowercase letters)
  const map = Array(128).fill(0);

  //   we have stored the pat t in the map fn
  for (let i = 0; i < tl; i++) {
    map[t.charCodeAt(i)]++;
  }

  let requiredCount = tl;
  let i = 0,
    j = 0;

  let minWindowSize = Infinity;
  let start_i = 0;

  //   logic begins
  while (j < n) {
    let codeJ = s.charCodeAt(j);
    // If s[j] is still needed for t, decrement requiredCount
    if (map[codeJ] > 0) requiredCount--;

    map[codeJ]--;

    while (requiredCount === 0) {
      //start shrinking the window
      currWindowSize = j - i + 1;

      if (minWindowSize > currWindowSize) {
        minWindowSize = currWindowSize;
        start_i = i;
      }
      const codeI = s.charCodeAt(i);

      // Remove s[i] from window
      map[codeI]++;

      if (map[codeI] > 0) {
        requiredCount++;
      }
      i++;
    }
    j++;
  }
  return minWindowSize === Infinity
    ? ""
    : s.substring(start_i, start_i + minWindowSize);
}

// const s = ["a", "d", "o", "b", "e", "c", "o", "d", "e", "b", "a", "n", "c"],
// t = ["a", "b", "c"]
s = "adobecodebanc";
t = "abc";

console.log(minWindow(s, t));
