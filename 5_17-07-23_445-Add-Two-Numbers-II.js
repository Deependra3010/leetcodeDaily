/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const reverseLinkedList = (ll) => {
        let prev = null;
        let currNode = ll;
        let nextNode = null;
        while(currNode !== null) {
            nextNode = currNode.next;
            currNode.next = prev;
            prev = currNode;
            currNode = nextNode;
        }
        return prev;
    }

    let l3 = reverseLinkedList(l1);
    let l4 = reverseLinkedList(l2);

    let carry = 0;
    let res = new ListNode(0);
    let reshead = res;
    while(l3 !== null || l4 !== null) {
        let l3_val = l3 ? l3.val : 0;
        let l4_val = l4 ? l4.val : 0;

        let currSum = l3_val + l4_val + carry;
        carry = Math.floor(currSum/ 10);
        let lastDigit = currSum % 10;
        console.log(lastDigit)

        let temp = new ListNode(lastDigit);
        reshead.next = temp;
        reshead = reshead.next;

        if(l3 !== null) l3 = l3.next;
        if(l4 !== null) l4 = l4.next;
    }
    if(carry > 0) {
        console.log('fdsafa')
        let temp = new ListNode(carry);
        reshead.next = temp;
    }
    return reverseLinkedList(res.next);
};
