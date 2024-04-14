export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next: ListNode | null = null) {
    this.val = val || 0
    this.next = next
  }
}

export type NullableListNode = ListNode | null