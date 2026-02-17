import { describe, expect, it } from "vitest";
import { isAnagram } from "./solution.js";

describe("Day 5: Valid Anagram ", () => {
  it("should return true if it is a valid anagram", () => {
    expect(isAnagram("anagram", "nagrama")).toBe(true);
  });
  it("should return false for different characters", () => {
    expect(isAnagram("rat", "cat")).toBe(false);
  });

  it("should return false if length are different", () => {
    expect(isAnagram("bat", "bats")).toBe(false);
  });
});
