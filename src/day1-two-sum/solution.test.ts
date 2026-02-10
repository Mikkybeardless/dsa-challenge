import { describe, it, expect } from "vitest";
import { twoSum } from "./solution.js";

describe("Day 1: Two Sum", () => {
  it("should return indices of the two numbers that add up to target", () => {
    expect(twoSum([2, 8, 11, 7], 9)).toEqual([0, 3]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("should return an empty array if no solution is found", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });
});
