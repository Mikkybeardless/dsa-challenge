/**
 * Time Complexity: O(n) - We iterate through the array a few times, but no nested loops or sorting.
 * Space Complexity: O(n) - For the Hash Map and the Bucket array.
 */

export function topKFrequent(nums: number[], k: number) {
  const frequencyMap = new Map<number, number>();

  // count each number in the array
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // initialize the bucket array [[],[],...n+1]
  const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  // added the numbers to the bucket using frequency as index
  for (const [num, freq] of frequencyMap.entries()) {
    bucket[freq].push(num);
  }

  let result: number[] = [];

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
      if (result.length >= k) {
        return result.slice(0, k);
      }
    }
  }

  return result;
}
