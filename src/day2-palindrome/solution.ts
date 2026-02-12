/**
 * Time Complexity: O(n) - One pass through the string
 * Space Complexity: O(1) - No extra data structures used
 */
export function isPalindrome(s: string): boolean {
  // Clean the string: remove non-alphanumeric and lowercase it
  const cleanS = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = cleanS.length - 1;
  while (left < right) {
    if (cleanS[left] !== cleanS[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
