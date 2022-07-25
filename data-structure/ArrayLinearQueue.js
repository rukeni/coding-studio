class ArrayLinearQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(data) {
    this.queue[this.rear] = data;
    this.rear++;
  }

  dequeue() {
    const value = [...this.queue][this.front];
    this.queue.splice(this.front, 1);
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}