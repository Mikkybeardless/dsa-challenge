/**
 * Time Complexity: O(n²) - Sorting takes O(n log n), and the nested loops take O(n²).
 * Space Complexity: O(1) or O(n) depending on the sorting algorithm implementation.
 */
export function threeSum(nums: number[]) {
  nums.sort((a, b) => a - b);
  let result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // duplicate check and iteration skip
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    // runs for every ith number
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;
        // Skip duplicate values for the left pointer
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        // Skip duplicate values for the right pointer
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        //  Sum is too small shift left hand pointer inward
        left++;
      } else {
        // Sum is too big, shift right hand pointer inward
        right--;
      }
    }
  }

  return result;
}
