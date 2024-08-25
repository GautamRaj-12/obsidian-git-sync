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
- ***Inserting at the beginning***
	- Create a new node and initially keep its next pointer pointing to itself.
	- Update the next pointer of the new node with the head node and also traverse the list until the tail. That means in a circular list we should stop at the node which is its previous node in the list.
	- Update the previous head node in the list to point to the new node.
	- Make the new node as the head.
- ***Inserting at the end***
	- Create a new node and initially keep its next pointer pointing to itself.
	- Update the next pointer of the new node with the head node and also traverse the list to the tail. That means in a circular list we should stop at the node whose next node is head.
	- Update the next pointer of the previous node to point to the new node and we get the list as shown below.

### Deleting in Circular Linked List
- ***Delete the first node***
	- 
- ***Delete the last node***