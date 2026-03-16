/**
 * Time Complexity: O(n) - We process each token exactly once.
 * Space Complexity: O(n) - In the worst case, all tokens are numbers stored on the stack.
 */

export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      // Pop the top two numbers.
      // The first pop is the RIGHT operand, the second pop is the LEFT operand.
      const right = stack.pop()!;
      const left = stack.pop()!;
      let result = 0;
      switch (token) {
        case "+":
          result = left + right;
          break;
        case "-":
          result = left - right;
          break;
        case "*":
          result = left * right;
          break;
        case "/":
          // Math.trunc removes fractional digits, moving towards zero
          result = Math.trunc(left / right);
          break;
      }

      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
