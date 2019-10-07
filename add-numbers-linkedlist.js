/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let a = l1;
  let b = l2;
  let remainder = false;
  const addNodes = (x, y) => {
    let result = remainder ? 1 : 0;
    remainder = false;
    if (x) {
      result += x.val;
      a = x.next;
    }

    if (y) {
      result += y.val
      b = y.next;
    }

    if (result >= 10) {
      remainder = true;
      result -= 10;
    }

    return result;
  };

  const result = new ListNode(addNodes(a, b));
  let currentNode = result;
  while (a || b) {
    currentNode.next = new ListNode(addNodes(a, b));
    currentNode = currentNode.next;
  }

  if (remainder) currentNode.next = new ListNode(1);

  return result;
};