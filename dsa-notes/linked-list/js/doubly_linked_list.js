class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBegin(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      // Point the new node's next to current head
      newNode.next = this.head;
      // Set the current head's previous to new node
      this.head.prev = newNode;
      // Move the head to the new node
      this.head = newNode;
    }
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      let prevData = current.prev ? current.prev.data : "null";
      let nextData = current.next ? current.next.data : "null";
      result += `[Prev: ${prevData}, Data: ${current.data}, Next: ${nextData}] <-> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

const L1 = new LinkedList();
const L2 = new LinkedList();
const arr = [2, 5, 8, 7];

// Adding all elements of the array to the beginning of linked list
arr.forEach((num) => L1.insertAtBegin(num));
// Printing the linked list
console.log("Adding all elements of the array to the beginning of linked list");
L1.printList();

// Adding all elements of the array to the beginning of linked list
arr.forEach((num) => L2.insertAtEnd(num));
// Printing the linked list
console.log("Adding all elements of the array to the ending of linked list");
L2.printList();
