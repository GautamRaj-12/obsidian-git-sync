# Linked List

## What is a Linked List?
- It is a data structure used for storing collections of data.
- But arrays are also use for storing collections of data. Then what's the difference?
## Arrays - Advantages and Disadvantages
| **Aspect**              | **Advantages**                                                                                     | **Disadvantages**                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Memory Allocation**   | Fixed size, which simplifies memory management.                                                    | Fixed size can lead to wasted memory if the array is underutilized or overflow if overutilized.        |
| **Access Time**         | Constant time `O(1)` access to elements using an index.                                            | No direct way to access elements by value, requiring a linear search `O(n)`.                           |
| **Iteration**           | Easy to iterate through elements using loops due to contiguous memory.                             | Iterating over large arrays can be time-consuming.                                                     |
| **Cache Friendliness**  | Contiguous memory allocation improves cache performance, leading to faster access speeds.          | Large arrays may not fit entirely in cache, leading to cache misses and slower performance.            |
| **Insertion/Deletion**  | Efficient when adding/removing elements at the end (`O(1)`).                                       | Inefficient for adding/removing elements at the beginning or middle (`O(n)`), requiring shifts.        |
| **Memory Wastage**      | Low memory overhead, since arrays don't require extra storage for pointers or metadata.            | Fixed size can result in wasted memory if the array isn't fully utilized.                              |
| **Predictability**      | Predictable performance characteristics due to constant time access and fixed memory allocation.   | Lack of flexibility, as the array size cannot be changed once allocated.                               |
| **Usage in Algorithms** | Arrays are simple and well-suited for low-level programming and performance-critical applications. | Less flexible compared to dynamic data structures like linked lists or dynamic arrays (e.g., vectors). |
## Linked List - Advantages and Disadvantages
| **Aspect**              | **Advantages**                                                                                           | **Disadvantages**                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Memory Allocation**   | Dynamic size; can grow or shrink as needed without waste.                                                | Requires extra memory for storing pointers in each node.                                             |
| **Insertion/Deletion**  | Efficient insertion/deletion at the beginning or middle (`O(1)` if the position is known).               | Inefficient for accessing elements by index (`O(n)`), as traversal is needed.                        |
| **Memory Utilization**  | No need to pre-allocate memory, reducing waste and avoiding overflow issues.                             | Fragmented memory usage can lead to poor cache performance.                                          |
| **Flexibility**         | Easier to implement data structures like stacks, queues, and more complex structures like trees.         | Difficult to implement with random access, making certain algorithms less efficient.                 |
| **No Wasted Space**     | No need to allocate a large contiguous block of memory, which is useful for systems with limited memory. | More complex memory management due to pointers, which can lead to errors like memory leaks.          |
| **Cache Performance**   | Can efficiently handle frequent insertions and deletions, especially in large datasets.                  | Poor cache locality due to non-contiguous memory allocation, leading to slower access times.         |
| **Simplicity**          | Simpler than dynamic arrays (e.g., vectors) in terms of memory reallocation logic.                       | Increased complexity in implementation, especially for operations like reversing or sorting.         |
| **Usage in Algorithms** | Preferred for implementing dynamic data structures where frequent insertions and deletions occur.        | Less efficient for algorithms requiring frequent access to elements by index, such as binary search. |
## Arrays vs Linked Lists vs Dynamic Arrays
| **Parameter**                       | **Linked List**       | **Array**                                                | **Dynamic Array**                                        |
| ----------------------------------- | --------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| **Indexing**                        | `O(n)`                | `O(1)`                                                   | `O(1)`                                                   |
| **Insertion/Deletion at Beginning** | `O(1)`                | `O(n)`, if array is not full (for shifting the elements) | `O(n)`                                                   |
| **Insertion at Ending**             | `O(n)`                | `O(1)`, if array is not full                             | `O(1)`, if array is not full<br>`O(n)`, if array is full |
| **Deletion at Ending**              | `O(n)`                | `O(1)`                                                   | `O(1)`                                                   |
| **Insertion in Middle**             | `O(n)`                | `O(n)`, if array is not full (for shifting the elements) | `O(n)`                                                   |
| **Deletion in Middle**              | `O(n)`                | `O(n)`, if array is not full (for shifting the elements) | `O(n)`                                                   |
| **Wasted Space**                    | `O(n)` (for pointers) | `0`                                                      | `O(n)`                                                   |
## Singly Linked List
- A singly linked list is a linear data structure composed of a sequence of nodes. Each node contains two key elements:
	1. **Data**: The value or data the node holds.
	2. **Next Pointer**: A reference to the next node in the sequence.

	The list starts with a special node called the **HEAD**, which points to the first node in the list. Each node's next pointer directs to the subsequent node, forming a chain. The last node in this chain has its next pointer set to `NULL`, signifying the end of the list.

	In simpler terms, the HEAD provides access to the linked list, and the nodes are connected one after another, with the final node marking the list's end with a `NULL` link.
	![image](images/ll-1.png)

### Traversing in Singly Linked List
- Follow the pointers.
- Display the contents of the nodes (or count) as they are traversed.
- Stop when the next pointer points to NULL.
- **TIME COMPLEXITY**: O(n) for scanning the list of size n
- **SPACE COMPLEXITY**:O(1) for temporary variable
### Insertion in Singly Linked List
- ***Insertion at the beginning***
	- Create new node
	- Update the pointer of new node, to point to the current HEAD
	 ![image](images/ll-2.png)
	- Update HEAD pointer to point to the new node.
	 ![image](images/ll-3.png)
	- **TIME COMPLEXITY**: O(1) Only a few pointer updates are required, so this operation takes constant time.
	- **SPACE COMPLEXITY**:O(1) The space required is constant, as only one new node is created.
- ***Insertion at the Ending***
	- Create new node
	- The new node points to NULL.
	 ![image](images/ll-4.png)
	- Last node's next pointer points to the new node
	 ![image](images/ll-5.png)
	- **TIME COMPLEXITY**: O(n) You need to traverse the entire list to find the last node (unless you maintain a tail pointer, in which case it would be O(1)).
	- **SPACE COMPLEXITY**:O(1) The space required is constant, as only one new node is created.
- ***Insertion at a given position***
	- If we want to add an element at position 3 then we stop at position 2. That means we traverse 2 nodes and insert the new node. For simplicity let us assume that the second node is called _position_ node. The new node points to the next node of the position where we want to add this node.
	 ![image](images/ll-6.png)
	- Position node’s next pointer now points to the new node.
	 ![image](images/ll-7.png)
	- **TIME COMPLEXITY**: O(n) In the worst case, you might need to traverse the entire list if you're inserting near the end.
	- **SPACE COMPLEXITY**:O(1) The space required is constant, as only one new node is created.
## Deletion in Singly Linked List
- ***Deleting the first node***
	- First node (current head node) is removed from the list. It can be done in two steps:
		- Create a temporary node which will point to the same node as that of head.
		  ![image](images/ll-8.png)
		- Now, move the head nodes pointer to the next node and dispose of the temporary node.
		  ![image](images/ll-9.png)
		- **TIME COMPLEXITY**: O(1) Only a few pointer updates are required, so this operation takes constant time.
		- **SPACE COMPLEXITY**:O(1) The space required is constant, as no additional space is needed aside from the temporary node.
- ***Deleting the last node***
	- This operation is a bit trickier than removing the first node, because the algorithm should find a node, which is previous to the tail. It can be done in three steps:
		- Traverse the list and while traversing maintain the previous node address also. By the time we reach the end of the list, we will have two pointers, one pointing to the _tail_ node and the other pointing to the node _before_ the tail node.
		  ![image](images/ll-10.png)
		- Update previous node’s next pointer with NULL.
		  ![image](images/ll-11.png)
		- Dispose of the tail node.
		  ![image](images/ll-12.png)
	- **TIME COMPLEXITY**: O(n) You need to traverse the entire list to find the node before the last node.
	- **SPACE COMPLEXITY**:O(1) The space required is constant, as no additional space is needed aside from maintaining the previous node pointer.
- ***Deleting the intermediate node***
	- The node to be removed is _always located between_ two nodes. Head and tail links are not updated in this case. Such a removal can be done in two steps:
		- Similar to the previous case, maintain the previous node while traversing the list. Once we find the node to be deleted, change the previous node’s next pointer to the next pointer of the node to be deleted.
		 ![image](images/ll-13.png)
		- Dispose of the current node to be deleted.
		 ![image](images/ll-14.png)
	- **TIME COMPLEXITY**: O(n) You need to traverse the list to find the node to be deleted.
	- **SPACE COMPLEXITY**:O(1) The space required is constant, as no additional space is needed aside from maintaining the previous node pointer.
- ***Delete singly linked list***
	- This works by storing the current node in some temporary variable and freeing the current node. After freeing the current node, go to the next node with a temporary variable and repeat this process for all nodes.
	- **TIME COMPLEXITY**: O(n) You need to traverse the entire list, freeing each node one by one.
	- **SPACE COMPLEXITY**:O(1) The space required is constant, as no additional space is needed aside from the temporary variable used for traversal.