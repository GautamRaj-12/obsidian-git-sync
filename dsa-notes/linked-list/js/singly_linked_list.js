class Node {
  constructor(data, next = null) {
    this.data = data; // Initialize data with the provided value
    this.next = next; // Initialize next with the provided reference, default is null
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Initialize the head of the list as null
  }

  // Function to add a new node at the end of the list
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // If the list is empty, make the new node the head
      this.head = newNode;
    } else {
      // Otherwise, find the last node and add the new node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Function to print the linked list
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

// Creating a new linked list
const L = new LinkedList();
const arr = [2, 5, 8, 7];

// Adding all elements of the array to the linked list
arr.forEach((num) => L.insertAtEnd(num));

// Printing the linked list
L.printList();
