/** valid anagram - easy question - leetcode - 242
 *
 * approach 1 :
 * sort both the element t,s then check whether both are equal
 * return true else false O(log n ) -> as we used the sort
 *
 *
 * approach 2:
 * create the map for the t => change the map value of t to 1 and then if we
 * encounter the same element from s then decrement it
 * finally if the sum of sum is 0 then anagram else not an anagram
 *
 */

function AnagramSort(s, t) {
  const arr_s = [...s].sort().join("");
  const arr_t = [...t].sort().join("");
  return arr_s === arr_t;
}

// console.log(AnagramSort("batdjfkru", "bdatjfkru"));

function Anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const count = Array(26).fill(0);

  for (let ch of s) {
    count[ch - "a".charCodeAt(0)]++;
  }
  for (let ch of t) {
    count[ch - "a".charCodeAt(0)]--;
  }

  //check all the ele in the count are zero
  //for loop
  for (let val of count) {
    if (val !== 0) {
      return false;
    }
  }
  return true;
}

console.log(Anagram("batdjfkru", "bdatkjruf"));

function AnagramUnicode(s, t) {
  // 1. Convert strings to arrays to safely handle Unicode/Emojis (surrogate pairs)
  const arrS = [...s];
  const arrT = [...t];

  if (arrS.length !== arrT.length) return false;

  // 2. Map dynamically stores unique characters and their counts
  const charCounts = new Map();

  // 3. Count characters in string S
  for (let ch of arrS) {
    charCounts.set(ch, (charCounts.get(ch) || 0) + 1);
  }

  // 4. Decrement and check against string T
  for (let ch of arrT) {
    if (!charCounts.has(ch)) {
      return false; // Character doesn't exist in s
    }

    const updatedCount = charCounts.get(ch) - 1;

    if (updatedCount === 0) {
      charCounts.delete(ch); // Clean up to keep map size minimal
    } else {
      charCounts.set(ch, updatedCount);
    }
  }

  // 5. If map is empty, all characters matched perfectly
  return charCounts.size === 0;
}

// --- Test Cases ---
console.log(AnagramUnicode("café", "éfac")); // true  (Unicode / Accents)
console.log(AnagramUnicode("👋🌍", "🌍👋")); // true  (Unicode / Emojis)
console.log(AnagramUnicode("Hello!", "!olleH")); // true  (ASCII / Punctuation)
console.log(AnagramUnicode("bat", "cat")); // false (Mismatch)
