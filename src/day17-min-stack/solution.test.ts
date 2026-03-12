import { describe, it, expect } from "vitest";
import { MinStack } from "./solution.js";

describe("Day 17: Min Stack", () => {
  it("should push, pop, get top, and get min in O(1) time", () => {
    const minStack = new MinStack();

    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    expect(minStack.getMin()).toBe(-3); // return -3

    minStack.pop(); // removes -3

    expect(minStack.top()).toBe(0); // return 0
    expect(minStack.getMin()).toBe(-2); // return -2, because -3 is gone!
  });

  it("should handle sequential pushes of the same minimum", () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(1);
    minStack.push(1);

    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
  });
});
