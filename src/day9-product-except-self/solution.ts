/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function productExceptSelf(nums: number[]) {
  const length = nums.length;
  const answer = new Array(length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    answer[i] = answer[i] === 0 ? 0 : answer[i];
    rightProduct *= nums[i];
  }
  return answer;
}
