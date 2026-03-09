import { describe, it, expect } from "vitest";
import { topKFrequent } from "./solution.js";

describe("Day 14: Top K Frequent Elements", () => {
  it("should return the top k frequent elements", () => {
    // We use expect.arrayContaining because the order within the result doesn't matter
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual(
      expect.arrayContaining([1, 2]),
    );
  });

  it("should handle an array with a single element", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  it("should handle negative numbers", () => {
    expect(topKFrequent([-1, -1], 1)).toEqual([-1]);
  });

  it("should handle all elements having the same frequency", () => {
    expect(topKFrequent([1, 2, 3], 3)).toEqual(
      expect.arrayContaining([1, 2, 3]),
    );
  });
});
