import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "./solution.js";

describe("Day 8: Longest Substring Without Repeating Characters", () => {
  it("should handle standard cases with repeating characters", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it("should handle strings where all characters are the same", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("should handle completely unique strings", () => {
    expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
  });

  it("should handle a substring in the middle", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("should return 0 for an empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });
});
