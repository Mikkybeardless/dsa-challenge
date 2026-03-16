import { describe, it, expect } from "vitest";
import { evalRPN } from "./solution.js";

describe("Day 18: Evaluate Reverse Polish Notation", () => {
  it("should evaluate simple addition and multiplication", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  });

  it("should evaluate division and truncate towards zero", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  });

  it("should evaluate a complex expression with negative numbers", () => {
    const tokens = [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ];
    expect(evalRPN(tokens)).toBe(22);
  });

  it("should handle an array with a single number", () => {
    expect(evalRPN(["18"])).toBe(18);
  });
});
