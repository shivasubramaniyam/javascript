/** given an input
 * txt = [f,o,r,x,x,o,r,f,x,d,o,f,r] and pattern = [f,o,r]
 * we need to analyse how many permutation of for is present in the txt
 *
 * check for,fro,ofr,orf,rof,rfo in the text
 *
 * approach (brute force):
 * iterate in the txt for 3 letter as the pattern length is 3
 * we are going to put the pattern in the map function and initially set to 1
 * if all the element is present in the text, all letter in the map is set to 0
 * this is going to happen for each iteration,
 *
 *
 * approach (sliding window) :
 * for the array of length
 * we are going to place the i,j in the first element, j is going to move till the window size
 * analyse the size = j-i+1
 * window size should be equal to the pattern's length, then we are going to check the map function(is every character in map set to 0)
 * then i is going to shift
 *
 * in simple words,
 * i and i
 * shift
 * frequency update
 */

//this fn returns the count of the anagram
function Anagram(txt, pat) {
  const n = txt.length;
  const count = Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  //count the frequency of each chars in pattern
  for (let i = 0; i < pat.length; i++) {
    let ch = pat[i];
    count[ch.charCodeAt(0) - aCode]++; //array of size 26 we are trying to locate the f,o,r in the array using the char 'a' and initially we are set those place to 1
  }

  let i = 0,
    j = 0,
    result = 0,
    k = pat.length;

  while (j < n) {
    // going from 0 to n
    count[txt[j].charCodeAt(0) - aCode]--;

    if (j - i + 1 === k) {
      if (count.every((num) => num === 0)) {
        result++;
      }
      count[txt[i].charCodeAt(0) - aCode]++;
      i++;
    }
    j++;
  }
  return result;
}

const txt = ["f", "o", "r", "x", "x", "o", "r", "f", "x", "d", "o", "f", "r"];
const pat = ["f", "o", "r"];

console.log(Anagram(txt, pat)); // Output: 3

//this fn returns the idx where the anagram starts

function Anagram1(txt, pat) {
  const n = txt.length;
  const counter = Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  const k = pat.length;
  for (let i = 0; i < k; i++) {
    const ch = pat[i];
    counter[ch.charCodeAt(0) - aCode]++;
  }

  let i = 0,
    j = 0,
    result = [];
  while (j < n) {
    counter[txt[j].charCodeAt(0) - aCode]--;

    //check for size of the pat
    if (j - i + 1 === k) {
      if (counter.every((num) => num === 0)) {
        result.push(i);
      }
      counter[txt[i].charCodeAt(0) - aCode]++;
      i++;
    }
    j++;
  }
  return result;
}

console.log(Anagram1(txt, pat));
