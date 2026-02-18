/**
 * Time Complexity: O(n) - We traverse the string once
 * Space Complexity: O(n) - In the worse case, we push all character in the stack
 */

export function isValidParentheses(s: string) {
  // stores only opening brackets
  let stack: string[] = [];
  const bracketMap: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // Define valid opening brackets for clarity
  const openingBrackets = new Set(["(", "{", "["]);
  for (const char of s) {
    if (bracketMap[char]) {
      // get top element from stack
      const topElement = stack.length === 0 ? "#" : stack.pop();
      // If it doesn't match the corresponding opening bracket, return false
      if (topElement !== bracketMap[char]) return false;
    } else if (openingBrackets.has(char)) {
      // It's an opening bracket, push it
      stack.push(char);
      // Any other characters (like "Ready") are ignored!
    }
  }
  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
}
