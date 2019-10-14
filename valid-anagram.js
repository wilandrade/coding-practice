/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = {};
  for (let i = 0; i < s.length; i++) {
    if (!sMap.hasOwnProperty(s[i])) {
      sMap[s[i]] = 0;
    }
    sMap[s[i]]++;
  }

  for (let j = 0; j < t.length; j++) {
    if (!sMap.hasOwnProperty(t[j]) || sMap[t[j]] < 1) {
      return false;
    }
    sMap[t[j]]--;
  }

  return true;
};