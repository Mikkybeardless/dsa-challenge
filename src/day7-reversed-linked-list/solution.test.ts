import { describe, it, expect } from "vitest";
import { reverseList, ListNode } from "./solution.js";

describe("Day 7: Reverse Linked List", () => {
  it("should reverse a list of multiple nodes", () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    const reversed = reverseList(head);

    expect(reversed?.val).toBe(3);
    expect(reversed?.next?.val).toBe(2);
    expect(reversed?.next?.next?.val).toBe(1);
  });

  it("should handle a single node", () => {
    const head = new ListNode(1);
    expect(reverseList(head)?.val).toBe(1);
  });

  it("should handle an empty list", () => {
    expect(reverseList(null)).toBe(null);
  });
});
