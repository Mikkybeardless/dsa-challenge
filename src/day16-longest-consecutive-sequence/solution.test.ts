import { describe, it, expect } from "vitest";
import { longestConsecutive } from "./solution.js";

describe("Day 16: Longest Consecutive Sequence", () => {
  it("should find the longest sequence in a mixed array", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it("should handle arrays with negative numbers and duplicates", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  it("should handle an empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it("should handle an array with a single element", () => {
    expect(longestConsecutive([5])).toBe(1);
  });

  it("should handle an array where all elements are the same", () => {
    expect(longestConsecutive([2, 2, 2, 2])).toBe(1);
  });
});
