/**
 * Time Complexity: O(n) - We iterate through both strings once.
 * Space Complexity: O(1) - Because the alphabet is limited to 26 characters,
 * the hash map size is constant regardless of input size.
 */

export function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false;
  let count = new Map<string, number>();
  // Count characters in string 's'
  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  //   Subtract the count using string 't'
  for (const char of t) {
    if (!count.has(char) || count.get(char) === 0) return false;
    count.set(char, count.get(char)! - 1);
  }
  return true;
}
