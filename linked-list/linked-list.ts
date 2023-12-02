class Node<T> {
  public readonly value: T;
  public next?: Node<T>;
  public prev?: Node<T>;

  constructor(value: T, prev?: Node<T>, next?: Node<T>) {
    this.value = value;
    this.prev = prev
    this.next = next
  }
}

// Double linked list
export class LinkedList<T> {
  private head?: Node<T> | undefined
  private tail?: Node<T> | undefined
  private length: number = 0

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }


  // insert element to tail
  public push(value: Readonly<T>) {
    const pTail = this.tail

    if (pTail === undefined) { // empty list 
      this.tail = new Node(value)
      this.head = this.tail
    } else { // insert node to tail
      pTail.next = new Node(value, pTail)
      this.tail = pTail.next
    }
    this.length++
  }

  // push to head
  public unshift(value: Readonly<T>): LinkedList<T> {
    const pHead = this.head

    if (pHead === undefined) { // empty list
      this.head = new Node(value)
      this.tail = this.head
    } else {
      pHead.prev = new Node(value, undefined, pHead)
      this.head = pHead.prev
    }
    this.length++
    return this
  }

  // pop from tail
  public pop(): T | undefined {
    if (!this.tail) {
      throw new Error("Cannot pop an empty list");
    }

    if (this.head === this.tail) { // only single node on list
      this.head = undefined
    } else {
      this.tail.next = undefined
    }
    const value = this.tail?.value
    this.tail = this.tail?.prev
    this.length--
    return value
  }

  // pop from head
  public shift(): T | undefined {
    if (!this.head) {
      throw new Error("Cannot shift an empty list");
    }
    const node = this.head

    if (this.head === this.tail) {
      this.tail = undefined
    } else {
      this.head = node?.next
      if (this.head) this.head.prev = undefined
    }
    this.length--
    return node?.value
  }

  public count(): number {
    return this.length;
  }

  public delete(value: Readonly<T>) {
    let nodeToDel = this.head
    while (nodeToDel?.value !== value && nodeToDel?.next) {
      nodeToDel = nodeToDel.next
    }
    if (nodeToDel?.value === value) {
      if (!nodeToDel.next) {  // only 1 elem in list
        this.tail = nodeToDel.prev
      }
      else if (!nodeToDel.prev) { // only 2 elems in list
        this.head = nodeToDel.next
      } else {
        nodeToDel.prev.next = nodeToDel.next
        nodeToDel.next.prev = nodeToDel.prev
      }
      this.length--
    }
  }
}
