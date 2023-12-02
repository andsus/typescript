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

  // constructor() {
  //   this.head = undefined;
  //   this.tail = undefined;
  //   this.length = 0;
  // }


  // insert element to tail
  push(value: Readonly<T>) {
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
  unshift(value: Readonly<T>): LinkedList<T> {
    // const element = new Node(value);

    // if (this.tail) {
    //   this.tail.next = element;
    // } else {
    //   this.head = element;
    // }

    // this.tail = element;
    // return this;
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
  pop(): T {
    if (!this.tail) {
      throw new Error("Cannot pop an empty list");
    }

    if (this.head === this.tail) { // only single node on list
      this.head = undefined
    } else {
      this.tail.next = undefined
    }
    const value = this.tail?.value
    this.tail = this.tail.prev
    this.length--
    return value
  }

  // pop from head
  shift(): T | undefined {
    // if (!this.tail) {
    //   throw new Error("Cannot shift an empty list");
    // }

    // if head === tail, else pop from head

    const node = this.head

    if (this.head === this.tail) {
      this.tail = undefined
    } else {
      this.head = node?.next
      if (this.head) this.head.prev = undefined
    }
    this.length--
    const value = this.head?.value
    this.head = this.head?.next
    return value
  }

  count(): number {
    return this.length;
  }

  delete(value: Readonly<T>): LinkedList<T> {
    let element = this.head;
    while (element) {
      if (element.value !== value) {
        element = element.next;
        continue;
      }

      if (element.next) {
        element.next.prev = element.prev;
      } else {
        this.tail = this.tail!!.prev;
      }

      if (element.prev) {
        element.prev.next = element.next;
      } else {
        this.head = this.head!!.next;
      }

      break;
    }

    return this;
  }
}
