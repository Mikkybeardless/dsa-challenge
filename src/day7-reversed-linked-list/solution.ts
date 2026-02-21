/**
 * Definition for singly-linked list node.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Time Complexity: O(n) - One pass through the list.
 * Space Complexity: O(1) - We only use pointers, no extra memory.
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next; // Store the next node
    current.next = prev; // Flip the pointer backward
    prev = current; // Move prev forward
    current = nextTemp; // Move current forward
  }

  return prev; // Prev will be the new head
}
