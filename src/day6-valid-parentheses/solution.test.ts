import { describe, expect, it } from "vitest";
import { isValidParentheses } from "./solution.js";

describe("Day 6: Valid Parentheses", () => {
  it("should return true for a valid parentheses", () => {
    expect(isValidParentheses("()")).toBe(true);
    expect(isValidParentheses("[]{}()")).toBe(true);
  });

  it("should return false if not a valid parentheses", () => {
    expect(isValidParentheses("[]{]()")).toBe(false);
  });
  it("should return true for an empty string", () => {
    expect(isValidParentheses("")).toBe(true);
  });
  it("should return true for nested valid brackets", () => {
    expect(isValidParentheses("{[]}Ready")).toBe(true); // Wait, usually problems are strict chars, but our logic handles text too
  });
});
