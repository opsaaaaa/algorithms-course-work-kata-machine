type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const new_tail = {value: item} as Node<T>
    if(!this.tail) {
      this.head = new_tail
      this.tail = new_tail
      this.length = 1
    } else {
      this.tail.next = new_tail
      this.tail = new_tail
      this.length++
    }
  }

  deque(): T | undefined {
    if(!this.head) {return undefined}

    if(this.head === this.tail) {
      this.tail = undefined
    }

    const val = this.head.value
    this.head = this.head.next
    this.length--
    return val
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
