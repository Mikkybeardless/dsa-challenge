import { describe, it, expect } from "vitest";
import { isPalindrome } from "./solution.js";

describe("Day 2: Valid Palindrome", () => {
  it("should return true for a valid palindrome phrase", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("should return false for an invalid palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  it("should handle empty strings or single characters", () => {
    expect(isPalindrome(" ")).toBe(true);
    expect(isPalindrome("a")).toBe(true);
  });
});
