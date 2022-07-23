class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListLinearQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.value;
  }

  size() {
    return this.size;
  }
}