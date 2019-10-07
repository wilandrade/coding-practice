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
var addTwoNumbers = function (l1, l2) {
  const getNumFromLinkedList = (node) => {
    let curNode = node;
    const nums = [];
    while (curNode) {
      nums.push(curNode.val);
      curNode = curNode.next;
    }
    return Number(nums.reverse().join(''));
  };

  const numToLinkedList = (num) => {
    const charArr = num.toString().split('');
    let head = null;
    let curNode = null;
    for (let i = charArr.length - 1; i >= 0; i--) {
      if (!head) {
        head = new ListNode(charArr[i]);
        curNode = head;
      } else {
        curNode.next = new ListNode(charArr[i]);
        curNode = curNode.next;
      }
    }
    return head;
  };

  const result = getNumFromLinkedList(l1) + getNumFromLinkedList(l2);
  return numToLinkedList(result);
};
