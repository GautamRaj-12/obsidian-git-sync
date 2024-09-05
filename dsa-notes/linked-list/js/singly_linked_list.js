class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const arr = [2, 5, 8, 7];
const y = new Node(arr[0]);
console.log(y.data);

// add an element at the end of the list
// insert element at a position index
// remove an element from the specified location
// remove a given element from the list
// finds the index of element
// checks the list for empty
// gives the size of the list
// prints the list items
