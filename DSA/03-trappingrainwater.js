/**The Trapping Rain Water problem calculates how much water can be stored between bars of varying heights after it rains. Water is trapped at any index i if there are taller bars on both its left and right sides.
 *
 * 
 * 
Core Intuition

• Formula: Water trapped at index i is min(leftMax, rightMax) - height[i] (if positive).
• Limiting factor: The amount of water is bound by the shorter of the two maximum boundary heights.
 */

function TrappingRainWater(height) {
  let n = height.length;
  if (n < 3) return 0;

  /**helper function */
  function getLeftMax(height, n) {
    let maxLeft = new Array(n);
    maxLeft[0] = height[0];

    for (let i = 1; i < n; i++) {
      maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }
    return maxLeft;
  }
  function getRightMax(height, n) {
    let maxRight = new Array(n);
    maxRight[n - 1] = height[n - 1];

    for (let i = n - 2; i >= 0; i--) {
      maxRight[i] = Math.max(maxRight[i + 1], height[i]);
    }
    return maxRight;
  }
  const LeftMax = getLeftMax(height, n); // 4
  const RighttMax = getRightMax(height, n); // 5
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const h = Math.min(LeftMax[i], RighttMax[i]) - height[i];
    sum += h;
  }
  return sum;
}

h = [4, 2, 0, 3, 2, 5];
console.log(TrappingRainWater(h));
