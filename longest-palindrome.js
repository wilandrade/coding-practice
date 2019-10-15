/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const charMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!charMap.hasOwnProperty(s[i])) {
      charMap[s[i]] = 0;
    }

    charMap[s[i]]++;
  }

  let maxPalindromeLen = 0;
  let hasExtra = false;
  for (key in charMap) {
    if (charMap[key] > 1) {
      const additionalChars = parseInt(charMap[key] / 2, 10);
      maxPalindromeLen += additionalChars * 2;
    }
    if (charMap[key] % 2) {
      hasExtra = true;
    }
  }

  return hasExtra ? maxPalindromeLen + 1 : maxPalindromeLen;
};