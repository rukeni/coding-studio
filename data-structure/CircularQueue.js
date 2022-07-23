class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(data) {
    if (this.isFull()) {
      return null;
    }

    this.queue[this.rear] = data;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const value = [...this.queue][this.front];
    this.queue.splice(this.front, 1);
    this.front = (this.front + 1) % this.maxSize;
    this.size--;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[this.front];
  }
}