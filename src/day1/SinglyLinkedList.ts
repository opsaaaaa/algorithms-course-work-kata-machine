type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  prepend(item: T): void {
    const node = {value: item} as Node<T>

    if (!this.head) {
      this.head = this.tail = node
      this.length = 1
    } else {
      node.next = this.head
      this.head = node
      this.length++
    }
  }

  insertAt(item: T, idx: number): void {
    if(idx > this.length) { throw new Error('Bad idx') }

    const insert = {value: item} as Node<T>;

    if(this.head! && idx === 0) {
      this.head = this.tail = insert
      this.length = 1
      return
    }

    let pre: Node<T> | undefined = undefined;
    let curr = this.head as Node<T>;

    for(let x = 0; x < idx; x++) {
      pre = curr
      if (!curr.next) {break}
      curr = curr.next as Node<T>
    }

    if (pre) {pre.next = insert}
    else { this.head = insert }

    insert.next = curr

    this.length++
  }

  append(item: T): void {
    const node = {value: item} as Node<T>

    if (!this.head || !this.tail) {
      this.head = this.tail = node
      this.length = 1
    } else {
      this.tail.next = node
      this.tail = node
      this.length++
    }
  }

  remove(item: T): T | undefined {
    if (!this.head) {return undefined}

    let pre: Node<T> | undefined = undefined
    let curr = this.head;

    for(let x = 0; x < this.length; x++) {
      if(curr.value === item) {
        const val = curr.value
        if (pre) {pre.next = curr.next}
        else {this.head = curr.next}
        curr.next = undefined
        this.length--
        return val
      }
      pre = curr
      curr = curr.next as Node<T>
    }

    return undefined
  }

  get(idx: number): T | undefined {
    if (!this.head) {return undefined}
    if (this.length === 0) {return undefined}

    let curr = this.head;
    for(let x = 0; x < idx; x++) {
      curr = curr.next as Node<T>
    }

    return curr.value
  }

  removeAt(idx: number): T | undefined {
    if (!this.head) {return undefined}
    if(idx > this.length || this.length === 0) { throw new Error('Bad idx') }

    let pre: Node<T> | undefined = undefined;

    let curr = this.head;
    for(let x = 0; x < idx; x++) {
      pre = curr
      curr = curr.next as Node<T>
    }

    const val = curr.value

    if (pre) {pre.next = curr.next}
    else {this.head = curr.next}

    curr.next = undefined
    this.length--
    return val
  }
}
