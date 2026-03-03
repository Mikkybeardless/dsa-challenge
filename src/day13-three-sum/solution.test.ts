import { describe, it, expect } from "vitest";
import { threeSum } from "./solution.js";

describe("Day 13: 3Sum", () => {
  it("should find all unique triplets that sum to zero", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it("should return an empty array if no triplets exist", () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  it("should handle an array of all zeros", () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it("should handle large amounts of duplicates gracefully", () => {
    expect(threeSum([-2, 0, 0, 2, 2])).toEqual([[-2, 0, 2]]);
  });
});
