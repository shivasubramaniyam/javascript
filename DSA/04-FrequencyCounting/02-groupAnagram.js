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
