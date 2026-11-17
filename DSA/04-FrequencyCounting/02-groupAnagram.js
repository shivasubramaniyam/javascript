/** group anagram - lc - 49 - medium problem
 *
 * lets take the input = ["eat","tea","tan","ate","nat",bat]
 * we need to group it according to the input and target will not be given as sepearte in the code
 *
 * approach : sort the element :then look for that element in the array
 *
 * if found group to the same, else create the new group
 *
 * sort it and put it in the map function
 */

function groupAnagram(input) {
  const n = input.length;
  const map = new Map();
  let result = [];
  for (let i = 0; i < n; i++) {
    let temp = input[i];
    let sort = [...temp].sort().join("");
    // console.log(sort);

    if (!map.has(sort)) {
      map.set(sort, []);
    }
    map.get(sort).push(input[i]);
  }

  return Array.from(map.values());
}

console.log(groupAnagram(["ate", "tan", "tea", "bat", "eat", "nat"]));

/** group anagram type 2
 * leetcode 49 -- medium -- n*(k + 26) => n*k
 * grouping the anagram without the sorting the element in the code
 *
 * input = ["eat","tea","tan","ate","nat","batt","tabt"]
 * approach :
 * goto the 1st element in the code, put it in the array/Map and increment the count
 *
 * and check for the rest of the element and group to the same string
 *
 * for "eat", we are going to get the aet as result in the Map
 * for "tea", we are going to get the same result, so we can group it accordingly
 *
 */

function Anagramtype2(a) {
  const generate = (word) => {
    const arr = Array(26).fill(0);
    for (let ch of word) {
      arr[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let new_word = "";
    for (let i = 0; i < 26; i++) {
      let freq = arr[i];
      if (freq > 0) {
        new_word += String.fromCharCode(i + "a".charCodeAt(0)) + freq;
      }
    }
    return new_word;
  };

  const n = a.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    let word = a[i];

    const new_word = generate(word);

    if (!map.has(new_word)) {
      map.set(new_word, []);
    }
    map.get(new_word).push(word);
  }
  return Array.from(map.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "batt", "tabt"];

console.log(Anagramtype2(input));
