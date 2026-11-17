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
