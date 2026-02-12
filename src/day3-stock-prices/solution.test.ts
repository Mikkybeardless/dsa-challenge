import { describe, it, expect } from "vitest";
import { maxProfit } from "./solution.js";

describe("Day 3: Best Time to Buy and Sell Stock", () => {
  it("should return the maximum profit possible", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("should return 0 if no profit can be made", () => {
    expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
  });
  it("should handle an array with two elements", () => {
    expect(maxProfit([1, 2])).toBe(1);
    expect(maxProfit([2, 1])).toBe(0);
  });
});
