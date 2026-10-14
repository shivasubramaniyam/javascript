/**input : [2,7,11,15]
 * target : 9
 * result : (2+7 = 9) so answer is {0,1}
 *
 *
 * approach 1 : O(n2)
 *  use the 2 for loop in the code, make a reverse engineering for this problem
 * target - i's value = temp, if temp exists in j's loop then return the i,j position
 *
 * ex : 9(target) - 2(i's first position) = 7(check for 7 in the j's loop)
 *
 * input : [3,4,9,2] target : 6
 * 6-3 = 3 but 3 doesn't exists in the j's loop, then increment i's value and iterate --> we get a result of {1,3}
 *
 *
 *
 * approach 2 : O(n)
 *
 * input : [2,7,11,15] target : 9
 *
 * lets try to store in the map and then check for the taget - i = temp, check the temp present in the map
 *
 *  iteration 1 --> i = 2, 9-2 = 7 --> then check in the map(right now map is empty) --> no map --> now pass the i to the map with idx 0
 *
 *  iteration 2 --> i = 7, 9-7 = 2 --> then check in the map(right now map is having one entry i.e is 2) --> map --> result satisfied get the map value
 * eg : {map[2],i} --> {0,1}
 */

// approach 1

// let input = [2, 7, 11, 15];
// const target = 9;

let input = [3, 4, 9, 2];
const target = 6;

let n = input.length;

for (let i = 0; i < n; i++) {
  let temp = target - input[i];
  for (let j = i + 1; j < n; j++) {
    if (temp === input[j]) console.log(i, j);
  }
}

//approach 2

function twoSum(input2, target2) {
  const map = new Map();
  for (let i = 0; i < input2.length; i++) {
    const temp = target2 - input2[i];

    if (map.has(temp)) {
      return [map.get(temp), i];
    }
    map.set(input2[i], i);
  }
  return [];
}

// let input2 = [3, 4, 9, 2];
// const target2 = 6;

let input2 = [2, 7, 11, 15];
const target2 = 9;

// console.log(twoSum(input2, target2));

//2 sum --> medium level problem sorted array
/** approach : consider the code where i and j to be in the end
 * i = 0, j = 3
 * add the 2 number if the target matches, return the resulted index
 * if the result is greater then left shift the j index and check the same condition
 * else right shift the i idx
 *
 * 1 based index returns the {i+1, j+1}
 *
 * i=0
 * j=n-1
 * while(i<j)
 * num[i]+num[j] > target --> j--
 * num[i]+num[j] < target --> i-- this is possible in the sorted array
 * num[i]+num[j] = target --> return the i,j --> 1 based index --> {i+1,j+1}
 *
 */

let input3 = [2, 7, 11, 15];
const target3 = 13;

function SortedTwoSum(input3, target3) {
  let i = 0,
    j = input3.length - 1;
  while (i < j) {
    if (input3[i] + input3[j] > target3) {
      j--;
    } else if (input3[i] + input3[j] > target3) {
      i++;
    }

    if (input3[i] + input3[j] === target3) {
      return { i, j };
    }
  }
}

console.log(SortedTwoSum(input3, target3));
