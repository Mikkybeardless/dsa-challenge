/**
 * Time Complexity: O(log n) - We half the search after every iteration
 * Space Complexity: O(1)
 */
export function search(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // Determine if the left half is perfectly sorted
    if (nums[left] <= nums[mid]) {
      // check if target is within the left side
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // otherwise right half is perfectly sorted
    else {
      // check if target is within the right side
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
