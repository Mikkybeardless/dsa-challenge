import { describe, it, expect } from "vitest";
import { groupAnagrams } from "./solution.js";

describe("Day 15: Group Anagrams", () => {
  it("should correctly group multiple anagrams", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result = groupAnagrams(input);

    // We check length to ensure groups were formed correctly
    expect(result.length).toBe(3);

    // Sorting the nested arrays for predictable testing,
    // since the problem states order doesn't matter
    const sortedResult = result.map((group) => group.sort()).sort();
    expect(sortedResult).toEqual([
      ["ate", "eat", "tea"],
      ["bat"],
      ["nat", "tan"],
    ]);
  });

  it("should handle an array with a single string", () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });

  it("should handle an array of empty strings", () => {
    expect(groupAnagrams(["", "", ""])).toEqual([["", "", ""]]);
  });
});
