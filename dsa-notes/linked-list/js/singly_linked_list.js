class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const newNode = new Node(data);
  }
}

const L1 = new LinkedList();
const arr = [2, 5, 8, 7];

arr.forEach((num) => L1.add(num));

// add an element at the end of the list
// insert element at a position index
// remove an element from the specified location
// remove a given element from the list
// finds the index of element
// checks the list for empty
// gives the size of the list
// prints the list items
