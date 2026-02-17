/**
 * Time Complexity: O(n) - we visit each number once
 * Space Complexity: O(n) - In the worse case, we store all number in the set
 */

export function containsDuplicate(nums: number[]) {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

// shorter solution
export const containsDuplicate2 = (nums: number[]): boolean => {
  return new Set(nums).size !== nums.length;
};
