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
	 ![[Pasted image 20240825134757.png]]
	- Update the next pointer of the new node with the head node and also traverse the list until the tail. That means in a circular list we should stop at the node which is its previous node in the list.
	 ![[Pasted image 20240825134809.png]]
	- Update the previous head node in the list to point to the new node.
	- Make the new node as the head.
	- **Time Complexity**: **O(n)**: The time complexity is `O(n)` because you need to traverse the list to find the tail node, which takes `O(n)` time.
	- **Space Complexity**: **O(1)**: The space complexity is `O(1)` as no extra space is required other than the new node being inserted.
- ***Inserting at the end***
	- Create a new node and initially keep its next pointer pointing to itself.
	- Update the next pointer of the new node with the head node and also traverse the list to the tail. That means in a circular list we should stop at the node whose next node is head.
	- Update the next pointer of the previous node to point to the new node and we get the list as shown below.
	- **Time Complexity**: **O(n)**: The time complexity is `O(n)` because you need to traverse the list to find the last node, which takes `O(n)` time.
	- **Space Complexity**: **O(1)**:The space complexity is `O(1)` as no extra space is required other than the new node being inserted.
### Deleting in Circular Linked List
- ***Delete the first node***
	- The first node can be deleted by simply replacing the next field of the tail node with the next field of the first node. 
		- Find the tail node of the linked list by traversing the list. Tail node is the previous node to the head node which we want to delete.
		- Create a temporary node which will point to the head. Also, update the tail nodes next pointer to point to next node of head (as shown below).
		- Now, move the head pointer to next node. Create a temporary node which will point to head. Also, update the tail nodes next pointer to point to next node of head (as shown below).
	- **Time Complexity**: **O(n)**: The time complexity is `O(n)` because you need to traverse the list to find the tail node.
	- **Space Complexity**: **O(1)**: The space complexity is `O(1)` since only a few pointers are updated without requiring extra space.
- ***Delete the last node***
	- The list has to be traversed to reach the last but one node. This has to be named as the tail node, and its next field has to point to the first node. 
		- Traverse the list and find the tail node and its previous node.
		- Update the tail node’s previous node pointer to point to head.
		- Dispose of the tail node.
	- **Time Complexity**: **O(n)**: The time complexity is `O(n)` because you need to traverse the list to find the last but one node.
	- **Space Complexity**: **O(1)**: The space complexity is `O(1)` since only pointers are updated, and no extra space is required.
