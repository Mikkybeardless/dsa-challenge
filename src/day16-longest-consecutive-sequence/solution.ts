/**
 * Time Complexity: O(n) - We only iterate through the array, and the inner while loop
 * only runs for actual sequence streaks, meaning each number is visited at most twice.
 * Space Complexity: O(n) - We store the numbers in a Set.
 */

export function longestConsecutive(nums: number[]) {
  if (nums.length === 0) return 0;
  const numSet = new Set<number>(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}
