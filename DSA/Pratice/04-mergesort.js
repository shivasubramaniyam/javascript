/**• Problem: Merge two sorted arrays nums1 and nums2 into nums1 as a single sorted array. nums1 has a size of m + n with the last n elements set to 0 as placeholders.
• Optimal Approach: Work backwards from the end of both arrays to avoid overwriting unprocessed elements in nums1.
• Pointers:
	• i = m - 1 (last valid element in nums1)
	• j = n - 1 (last element in nums2)
	• k = m + n - 1 (end slot in nums1)
• Algorithm Steps:
	1. Compare nums1[i] and nums2[j].
	2. Place the larger value at nums1[k] and decrement that source pointer (i or j).
	3. Always decrement k.
	4. Repeat until nums2 is exhausted (j < 0). */

const num1 = [1, 2, 3],
  num2 = [2, 5, 6];

function MergeSort(arr1, arr2) {
  let m = arr1.length,
    n = arr2.length,
    i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (j >= 0) {
    if (i > 0 && arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--;
  }
  return arr1;
}

console.log(MergeSort(num1, num2));
