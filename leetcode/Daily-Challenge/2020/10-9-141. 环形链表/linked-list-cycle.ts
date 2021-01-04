
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (slow && fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next
  }
  return false;
};