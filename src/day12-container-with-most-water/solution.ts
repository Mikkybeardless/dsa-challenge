/**
 * Time Complexity: O(n) - We traverse the array exactly once.
 * Space Complexity: O(1) - Only using a few variables for pointers and max area.
 */

export function maxArea(height: number[]) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentArea = width * currentHeight;

    maxWater = Math.max(currentArea, maxWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}
