/**
 * Time Complexity: O(n) - In the worst case, each character is visited twice
 * (once by 'right' pointer and once by 'left' pointer).
 * Space Complexity: O(min(m, n)) - Where 'n' is string length and 'm' is the
 * size of the character set (e.g., 26 for alphabet, or more for ASCII).
 */
export function lengthOfLongestSubstring(s: string) {
  let charSet = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (charSet.has(s[right])) {
      while (charSet.has(s[right])) {
        charSet.delete(s[left]);
        left++;
      }
    }
    //    Add the current character to our window
    charSet.add(s[right]);
    // Calculate the window size and update max
    // right - left + 1 gives us the current window's length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
