class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log("Is the queue empty: ", queue.isEmpty());

queue.enqueue(15);
queue.enqueue(30);
queue.enqueue(45);

console.log("After inserting");
console.log("Is the queue empty: ", queue.isEmpty());
console.log("Size of queue: ", queue.size());
queue.print();
console.log("First Element: ", queue.peek());

queue.dequeue();

console.log("After deleting");

console.log("Size of queue: ", queue.size());
queue.print();
console.log("First Element: ", queue.peek());
