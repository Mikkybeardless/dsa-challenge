/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
import { logger } from "../utils/logger.js";
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    logger.step(`Checking index ${i}`, { value: nums[i] });
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}
