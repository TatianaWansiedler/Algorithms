class MyQueue {
  constructor(n) {
    this.storage = Array(n)
    this.size = 0
  }
  enqueue(item) {
    if (this.size < this.storage.length) {
      this.storage[this.size++] = item;
    }
  }
  dequeue() {
    let t = this.storage[0];
    for (let i = 0; i < this.size; i++) {
      this.storage[i] = this.storage[i + 1]
    }
    return t;
  }
  isEmpty() {
    return this.size === 0
  }
  maxItemInQueue() {
    let max = this.storage[0]
    for (let i = 1; i < this.size; i++) {
      if (this.storage[i] > max) max = this.storage[i]
    }
    return max;
  }
  peek() {
    return this.storage[0];
  }

}

const queue = new MyQueue(100)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue.storage);

console.log(queue.dequeue());

console.log(queue.storage);

console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.maxItemInQueue());


