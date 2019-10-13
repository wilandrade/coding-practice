/*
Given a string, find the length of the longest substring without repeating characters.

Example:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let curCombo = [];
  let comboMap = {};
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (!comboMap.hasOwnProperty(s[i])) {
      curCombo.push(s[i]);
      comboMap[s[i]] = i;
      if (curCombo.length > max) max = curCombo.length;
    } else {
      const newStart = comboMap[s[i]]; // index of repeated char
      i = newStart;
      curCombo = [];
      comboMap = {};
    }
  }

  return max;
};

