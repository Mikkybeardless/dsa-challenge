/**
 * Time Complexity: O(n * k log k) - Where 'n' is the number of strings,
 * and 'k' is the maximum length of a string (due to the sorting step).
 * Space Complexity: O(n * k) - To store the Hash Map and the grouped strings.
 */
export function groupAnagrams(strs: string[]) {
  const anagramMap = new Map<string, string[]>();

  for (const str of strs) {
    // create unique string signature used to identify related strings
    const signature = str.split("").sort().join("");

    if (!anagramMap.has(signature)) {
      anagramMap.set(signature, []);
    }

    // push string to array using signature as key
    anagramMap.get(signature)!.push(str);
  }

  // convert map's value which are array of strings to a singlw 2D array
  return Array.from(anagramMap.values());
}
