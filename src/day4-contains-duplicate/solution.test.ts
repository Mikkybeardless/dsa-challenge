import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./solution.js";

describe("Day 4: Contains Duplicate", () => {
  it("should return true if it contains duplicate numbers", () => {
    expect(containsDuplicate([1, 2, 3, 4, 1])).toBe(true);
  });

  it("should return false if no duplicate in arrray", () => {
    expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false);
  });
  it("should handle large arrays", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(containsDuplicate([...largeArray, 999])).toBe(true);
  });
});
