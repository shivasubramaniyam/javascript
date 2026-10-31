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
 */

function MinimumWindowSubstring(s, t) {
  const n_s = s.length;
  const t_s = t.length;
  let count_req = t_s;

  const counter = Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (let i = 0; i < t_s; i++) {
    ch = t[i];
    counter[ch.charCodeAt(0) - aCode]++;
  }

  while (j < n_s) {
    if (s[j] === counter[j.charCodeAt - aCode]) {
      counter[j.charCodeAt(0)]--;
      count_req--;
      j++;
    } else {
    }
  }

  return counter;
}

const s = ["a", "d", "o", "b", "e", "c", "o", "d", "e", "b", "a", "n", "c"],
  t = ["a", "b", "c"];

console.log(MinimumWindowSubstring(s, t));
