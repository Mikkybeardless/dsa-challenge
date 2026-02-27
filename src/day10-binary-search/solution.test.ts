import { describe, it, expect } from "vitest";
import { binarySearch } from "./solution.js";

describe("Day 10: Binary Search", () => {
  it("should find the right target in the right half", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });
  it("should find the target in the left half", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 0)).toBe(1);
  });

  it("should return -1 if the target does not exist", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  it("should handle an array with a single element", () => {
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], 2)).toBe(-1);
  });
});
