# Doubly Linked List
## What is a doubly linked list?
-  A doubly linked list is a linear data structure composed of a sequence of nodes. Each node contains three key elements:

	1. **Data**: The value or data the node holds.
	2. **Next Pointer**: A reference to the next node in the sequence.
	3. **Previous Pointer**: A reference to the previous node in the sequence.
- The list starts with a special node called the **HEAD**, which points to the first node in the list. Each node's next pointer directs to the subsequent node, while the previous pointer directs to the preceding node, allowing traversal in both directions. The last node in this chain, called the **TAIL**, has its next pointer set to `NULL`, signifying the end of the list, and its previous pointer points to the preceding node.
- In simpler terms, the HEAD provides access to the linked list, and the nodes are connected both forward and backward, with the final node marking the list's end with a `NULL` link in the next pointer and a reference to the previous node in the sequence.

### Inserting in Doubly Linked List
- ***Insert a node at the beginning***
- ***Insert a node at the Ending***
- -Ins