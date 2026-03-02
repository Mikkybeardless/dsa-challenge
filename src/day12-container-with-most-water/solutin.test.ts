import { describe, it, expect } from "vitest";
import { maxArea } from "./solution.js";

describe("Day 12: Container With Most Water", () => {
  it("should calculate the maximum area for a varied array", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("should handle an array with only two lines", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("should handle heights where the best container is narrow but very tall", () => {
    expect(maxArea([1, 2, 100, 100, 2, 1])).toBe(100);
  });

  it("should handle an array where heights strictly decrease", () => {
    expect(maxArea([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(20);
  });
});
