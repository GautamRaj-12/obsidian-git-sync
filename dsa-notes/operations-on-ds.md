| **Data Structure** | **Operation**                            | **Time Complexity**                       | **Description**                             |
| ------------------ | ---------------------------------------- | ----------------------------------------- | ------------------------------------------- |
| **Arrays**         | Access                                   | `O(1)`                                    | Retrieve element by index                   |
|                    | Search                                   | `O(n)` / `O(log n)` (Binary Search)       | Linear or Binary Search (sorted array)      |
|                    | Insertion                                | `O(1)` (end), `O(n)` (beginning/middle)   | Add element at end or shift elements        |
|                    | Deletion                                 | `O(1)` (end), `O(n)` (beginning/middle)   | Remove element from end or shift elements   |
| **Linked List**    | Access                                   | `O(n)`                                    | Traverse to reach a node                    |
|                    | Search                                   | `O(n)`                                    | Traverse to find an element                 |
|                    | Insertion                                | `O(1)` (beginning), `O(n)` (end/middle)   | Update pointers or traverse to insert       |
|                    | Deletion                                 | `O(1)` (beginning), `O(n)` (end/middle)   | Update pointers or traverse to delete       |
| **Stacks**         | Push                                     | `O(1)`                                    | Add element to the top                      |
|                    | Pop                                      | `O(1)`                                    | Remove and return the top element           |
|                    | Peek                                     | `O(1)`                                    | View the top element without removing       |
|                    | Is Empty                                 | `O(1)`                                    | Check if the stack is empty                 |
| **Queues**         | Enqueue                                  | `O(1)`                                    | Add element to the rear                     |
|                    | Dequeue                                  | `O(1)`                                    | Remove and return the front element         |
|                    | Peek/Front                               | `O(1)`                                    | View the front element without removing     |
|                    | Is Empty                                 | `O(1)`                                    | Check if the queue is empty                 |
| **Hash Tables**    | Insertion                                | `O(1)` (average), `O(n)` (worst-case)     | Add key-value pair                          |
|                    | Search                                   | `O(1)` (average), `O(n)` (worst-case)     | Retrieve value by key                       |
|                    | Deletion                                 | `O(1)` (average), `O(n)` (worst-case)     | Remove key-value pair                       |
|                    | Collision Handling                       | `O(1)` (average), `O(n)` (worst-case)     | Use chaining or open addressing             |
| **Trees**          | Traversal (Inorder, Preorder, Postorder) | `O(n)`                                    | Traverse the tree                           |
|                    | Search                                   | `O(log n)` (average), `O(n)` (worst-case) | Binary Search Tree traversal                |
|                    | Insertion                                | `O(log n)` (average), `O(n)` (worst-case) | Insert while maintaining tree property      |
|                    | Deletion                                 | `O(log n)` (average), `O(n)` (worst-case) | Remove and adjust to maintain tree property |
| **Heaps**          | Insertion                                | `O(log n)`                                | Add element and heapify up                  |
|                    | Peek/Find Min/Max                        | `O(1)`                                    | View the root (min/max element)             |
|                    | Deletion                                 | `O(log n)`                                | Remove root and heapify down                |
|                    | Heapify                                  | `O(n)`                                    | Convert array into a heap                   |
| **Graphs**         | Traversal (BFS/DFS)                      | `O(V + E)`                                | Explore graph level by level or depth-wise  |
|                    | Search                                   | `O(V + E)`                                | Find a path or specific node                |
|                    | Insertion (Vertex/Edge)                  | `O(1)`                                    | Add a new vertex or edge                    |
|                    | Deletion (Vertex/Edge)                   | `O(V + E)` (vertex), `O(1)` (edge)        | Remove vertex and edges or remove an edge   |
| **Tries**          | Insertion                                | `O(m)`                                    | Add a word character by character           |
|                    | Search                                   | `O(m)`                                    | Find a word character by character          |
|                    | Deletion                                 | `O(m)`                                    | Remove a word                               |
| **Sets**           | Insertion                                | `O(1)` (average), `O(n)` (worst-case)     | Add an element                              |
|                    | Deletion                                 | `O(1)` (average), `O(n)` (worst-case)     | Remove an element                           |
|                    | Search                                   | `O(1)` (average), `O(n)` (worst-case)     | Check if an element exists                  |
|                    | Union/Intersection/Difference            | `O(n)`                                    | Combine or find common elements             |
