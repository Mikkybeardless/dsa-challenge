import { describe, it, expect } from "vitest";

import { search } from "./solution.js";

describe("Day 11: Rotated Sorted Array Search", () => {
  it("should find the target when it is in the right rotated half", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it("should find the target when it is in the left rotated half", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 6)).toBe(2);
  });

  it("should return -1 when the target is not in the array", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it("should handle an array that was not actually rotated", () => {
    expect(search([1, 2, 3, 4, 5], 4)).toBe(3);
  });

  it("should handle small arrays", () => {
    expect(search([3, 1], 1)).toBe(1);
  });
});
