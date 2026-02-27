/**
 * Time Complexity: O(logn) - We halve the search space on every iteration
 * Space complexisty: O(1) we only use the points
 * @param nums
 * @param target
 * @returns
 */

export function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
