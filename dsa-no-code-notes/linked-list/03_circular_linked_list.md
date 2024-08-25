# Circular Linked List
## What is a Circular Linked List?
- A circular linked list is a linear data structure composed of a sequence of nodes, similar to a singly linked list, but with a unique twist. Each node in a circular linked list contains two key elements:

  1. **Data**: The value or data the node holds.
  2. **Next Pointer**: A reference to the next node in the sequence.

- The list starts with a special node called the **HEAD**, which points to the first node in the list. The **TAIL** or last node in the list, instead of pointing to `NULL`, points back to the HEAD node, forming a closed loop or circle.
- In simpler terms, a circular linked list is like a singly linked list, but instead of the last node pointing to `NULL`, it wraps around and points back to the first node. This allows traversal to continue indefinitely around the list, with no distinct end.

### Traversing in Circular Linked List 
- Start from the head of the list. - Follow the `next` pointers, visiting each node. 
- Display the contents of the nodes (or count) as they are traversed. 
- Stop when you return to the head node (to prevent infinite looping). 
- **Time Complexity**: O(n) for scanning the list of size `n`
- **Space Complexity**: O(1) for the temporary variable used to track the current node
### Inserting in Circular Linked List

### Deleting in Circular Linked List
