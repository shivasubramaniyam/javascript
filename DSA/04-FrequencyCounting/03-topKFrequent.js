/**given the input = [1,1,1,2,2,3] k=2 => return the top 2 repeated element in the code
 * output =[1,2]
 *
 * approach (brute force):
 * select the data structure which is best for the solution
 * to maintain the freq we use the map function
 * we can take the top k element with most count
 * but the code takes the worst case as O(n logn)
 *
 * approach-1 (Heap) - n(log(k))
 * we are going to store the freq in the heap and constantly we are checking the code
 * we will 1st freq in the heap as k=2
 * but when the new element with more freq will get into the heap and then remove the element with the least frq from the heap
 * we are going to get the min Heap logic with time complexity log(size)
 *
 * map - freq , minHeap (for comparison)
 * size > k then pop the element(smaller freq will be at the top)
 */

function TopKFrequent(a, k) {
  const n = a.length;
  const freqMap = new Map();
  const minHeap = []; // Stores [freq, num], smallest freq always at index 0
  const result = [];

  //   1.store frequency in the map
  for (let i = 0; i < n; i++) {
    freqMap.set(a[i], freqMap.get(a[i] || 0) + 1);
  }

  //   helper func to push into minHeap in O(log k)
  function heapPush(pair) {
    minHeap.push(pair);
    let idx = minHeap.length - 1;

    // Bubble up: keep smallest frequency at index 0
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (minHeap[parentIdx][0] <= minHeap[idx][0]) break;

      // Swap with parent
      let temp = minHeap[parentIdx];
      minHeap[parentIdx] = minHeap[idx];
      minHeap[idx] = temp;
      idx = parentIdx;
    }
  }
  // Helper to pop the smallest frequency element from top of minHeap in O(log k)

  function heapPop() {
    if (minHeap.length === 1) return minHeap.pop();

    const top = minHeap[0];
    minHeap[0] = minHeap.pop();
    let idx = 0;
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let smallest = idx;

      if (left < minHeap.length && minHeap[left][0] < minHeap[smallest][0]) {
        smallest = left;
      }

      if (right < minHeap.length && minHeap[right][0] < minHeap[smallest][0]) {
        smallest = right;
      }
      if (smallest === idx) break;

      // Swap with smaller child
      let temp = minHeap[idx];
      minHeap[idx] = minHeap[smallest];
      minHeap[smallest] = temp;
      idx = smallest;
    }
    return top;
  }
  // 2. Iterate through map and maintain heap size k
  for (const [num, freq] of freqMap.entries()) {
    heapPush([freq, num]);
    // If size > k, pop the element with the least frequency (at the top)
    if (minHeap.length > k) {
      heapPop();
    }
  }

  //3. collect the top k element from the heap into result

  while (minHeap.length > 0) {
    const [freq, num] = heapPop();
    result.push(num);
  }
  return result;
}

// Test Run
const input = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(TopKFrequent(input, k));

/**approach 2
 *
 * let us take the input = [1,1,1,3,2,2] n=6 k=2
 *
 * let us take the result array where the frequency of all element initial zero
 * sub approach 1 : if the element occurs in the input array increase the frequency in the index
 *    i.e 1 is repeated 3 times, in the index 1 of the result array, add the frequency
 *    but the problem is that if 100 is present in the input array, they use more space
 *
 * sub approach 2 : let us reverse the approach in the code
 *    let us take the freq in the index
 *    if the freq of 1 is 3 times, we are going to put it in the index = 3, value in that index will be {1}
 *    this make the result array index as n because n can be the max freq in the input array
 *
 * store the freq in the map
 * create the bucket for each frequency, element having i frequency
 * now find the result from the bucket for k size
 *
 */

function TopKFrequent2(arr, k) {
  const n = arr.length;

  const map = new Map();
  // 1. Count frequencies: O(n)
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  // 2. Create buckets where index = frequency: O(n)
  // Max possible frequency of any element is n
  const bucket = Array.from({ length: n + 1 }, () => []);
  //index = freq
  //value = element
  //bucket[i] = elements having i frequency

  for (const [num, freq] of map) {
    bucket[freq].push(num);
  }
  // 3. Collect top k elements from highest frequency bucket to lowest: O(n)
  const result = [];
  for (let freq = n; freq >= 1 && result.length < k; freq--) {
    for (const num of bucket[freq]) {
      result.push(num);
      if (result.length === k) {
        return result;
      }
    }
  }
  return result;
}

console.log(TopKFrequent2([1, 1, 1, 2, 2, 3], 2));
