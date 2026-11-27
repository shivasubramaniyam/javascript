/**leetcode - medium - 46
 * permutation --> backtracking question
 *
 * Backtracking is a problem-solving algorithm that builds a solution step by step and abandons a path as soon as it determines the path cannot lead to a valid result. It works like navigating a maze by walking down a path, hitting a dead end, and returning to the last turn to try a different route.

How It Works

Backtracking relies on recursion to explore all potential options systematically.
• Choose. Select one available option for the current step of the problem.
• Explore. Move forward to the next step with that choice in place.
• Check. Test if the current path breaks any rules of the problem.
• Unchoose (Backtrack). Undo the last choice if it leads to a dead end, then try the next available option.

example : {1,2,3} output:[[1,2,3],[1,3,2],[2,1,3],[2,3,1][3,1,2][3,2,1]]
 */
function permute(nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);

  function backtrack(currentPath) {
    // 1. Base Case: A complete permutation is formed (last node of the tree)
    if (currentPath.length === nums.length) {
      result.push([...currentPath]); //push shallow copy, else current result only appears
      return;
    }
    // 2. Explore all choices
    for (let i = 0; i < nums.length; i++) {
      // Skip elements already used in the current branch
      if (used[i]) continue;

      //choose
      used[i] = true;
      currentPath.push(nums[i]);

      // Explore (Recurse)
      backtrack(currentPath);

      // Un-choose (Backtrack)
      currentPath.pop();
      used[i] = false;
    }
  }
  backtrack([]);
  return result;
}

console.log(permute([1, 2, 3]));

/** approach 2
 * instead of having the used tree and current path
 * we are going to the divide into the fixed right path and left path in the code
 * from 0 to start-1 (fixed left part) and unxplored right part(start to n-1)
 *
 *
 *
 */

function permuteSwap(nums) {
  const result = [];
  const n = nums.length;
  function backtrack(start) {
    //1. base case : all position up to the end are fixed
    if (start === n) {
      result.push([...nums]);
      return;
    }

    //2. try placing every remaining element (from start to end) at index start
    for (let i = start; i < n; i++) {
      // Choose: Swap nums[start] with nums[i]
      [nums[start], nums[i]] = [nums[i], nums[start]];

      // Explore: Fix the next position (start + 1)
      backtrack(start + 1);

      // Un-choose (Backtrack): Swap back to restore original order
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  backtrack(0);
  return result;
}

console.log(permuteSwap([1, 2, 3]));
