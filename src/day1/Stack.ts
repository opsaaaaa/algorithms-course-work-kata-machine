type Node<T> = {
  value: T
  prev?: Node<T>
}

export default class Stack<T> {
  public length: number
  public head?: Node<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    const new_head = {value: item, prev: this.head} as Node<T>
    this.head = new_head
    this.length++
  }

  pop(): T | undefined {
    if(!this.head) {return undefined}
    const val = this.head.value
    this.head = this.head.prev
    this.length--
    return val
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
