type Node<T> = {
  value: T,
  next?: Node<T>,
  prev?: Node<T>
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  prepend(item: T): void {
    if (!this.head) {
      this.init_first_node(item)
      return
    } else {
      const node = {value: item, next: this.head} as Node<T>
      this.head.prev = node
      this.head = node
      this.length++
    }
  }

  insertAt(item: T, idx: number): void {
    if(idx > this.length) {
      throw new Error('Bad idx')
    } else if(idx === 0) {
      this.prepend(item)
    } else if(idx === this.length) {
      this.append(item)
    } else {
      const sufix = this.get_node(idx) as Node<T>
      const prefix = sufix.prev as Node<T>
      const insert = {value: item, next: sufix, prev: prefix}
      prefix.next = insert
      sufix.prev = insert
      this.length++
    }

  }

  append(item: T): void {
    if (!this.tail) {
      this.init_first_node(item)
      return
    } else {
      const node = {value: item, prev: this.tail} as Node<T>
      this.tail.next = node
      this.tail = node
      this.length++
    }
  }

  remove(item: T): T | undefined {
    if(this.head) {
      let cut = this.head
      for(let i = 0; i < this.length; i++) {
        if(cut.value === item) {
          return this.remove_node(cut)
        }
        cut = cut.next as Node<T>
      }
    }
    return undefined
  }

  get(idx: number): T | undefined {
    return this.get_node(idx)?.value
  }

  removeAt(idx: number): T | undefined {
    if(idx > this.length) {
      return undefined
    } else {
      return this.remove_node(this.get_node(idx) as Node<T>)
    }
  }

  private get_node(idx: number): Node<T> | undefined {
    if(idx > this.length) {return undefined}
    if(idx > (this.length / 2)) {
      return this.get_node_by_prev(idx)
    } else {
      return this.get_node_by_next(idx)
    }
  }

  private remove_node(cut: Node<T>): T {
    const sufix = cut.next
    const prefix = cut.prev

    if(prefix) {
      prefix.next = sufix
    } else {
      this.head = sufix
    }

    if(sufix) {
      sufix.prev = prefix
    } else {
      this.tail = prefix
    }

    cut.next = cut.prev = undefined
    this.length--
    return cut.value
  }

  private get_node_by_next(idx: number): Node<T> {
    let node = this.head as Node<T>
    for(let i = 0; i < idx; i++) {
      node = node.next as Node<T>
    }
    return node
  }

  private get_node_by_prev(idx: number): Node<T> {
    let node = this.tail as Node<T>
    for(let i = idx + 1; i < this.length; i++) {
      node = node.prev as Node<T>
    }
    return node
  }

  private init_first_node(item: T): void {
    const new_node = {value: item}
    this.head = this.tail = new_node
    this.length = 1
  }


}
