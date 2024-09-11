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

  // Function to add a new node at the beginning of the list
  insertAtBegin(data) {
    const newNode = new Node(data);
    if (!this.head) {
      //If the list is empty, make the new node the head
      this.head = newNode;
    } else {
      // Point the new node's next to the current head
      newNode.next = this.head;
      // Make the new node the new head
      this.head = newNode;
    }
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
      let nextData = current.next ? current.next.data : "null";
      result += `Data:${current.data},Next:${nextData} -> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

// Creating a new linked list
const L1 = new LinkedList();
const L2 = new LinkedList();
const arr = [2, 5, 8, 7];

// Adding all elements of the array to the end of linked list
arr.forEach((num) => L1.insertAtEnd(num));
// Printing the linked list
console.log("Adding all elements of the array to the end of linked list");
L1.printList();

// Adding all elements of the array to the beginning of linked list
arr.forEach((num) => L2.insertAtBegin(num));
// Printing the linked list
console.log("Adding all elements of the array to the beginning of linked list");
L2.printList();
