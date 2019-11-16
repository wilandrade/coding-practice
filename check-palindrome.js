/*
Write a function to validate if a string is a palindrome ignoring spaces.
“Hello World” is not a palindrome
“A Toyota’s a Toyota” is a palindrome
*/

var isPalindrome = function (str) {
  const trimmedStr = str.trim();
  if (!trimmedStr.length) return false;

  const isValidChar = (c) => {
    //looked up this regex online: checks if character is alphanumerical.
    //could also use ASCII codes but this is a bit more elegant in my opinion.
    return c.match(/[A-Za-z0-9]+/g) ? true : false;
  };

  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    while (!isValidChar(str[start])) start++;
    while (!isValidChar(str[end])) end--;

    if (end < start || str[start].toLowerCase() !== str[end].toLowerCase()) return false;

    start++;
    end--;
  }

  return true;
};