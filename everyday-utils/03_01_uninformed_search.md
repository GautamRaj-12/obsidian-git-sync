# Searching

## Uninformed vs Informed Search

| Uninformed Search                                                                 | Informed Search                                                                 |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| No information about the path, cost, from the current state to the goal state. It doesn't use domain specific knowledge for searching process. | The path cost from current state to goal state is calculated, to select the minimum cost path as the next state. It uses domain specific knowledge for the searching process. |
| It finds solution slow as compared to informed | It finds solution more quickly. |
| Less efficient | More efficient |
| Cost is high. | Cost is low. |
| No suggestion is given regarding the solution init. Problem to be solved with the given information only. | It provides the direction regarding the solution. Additional information can be added as assumption to solve the problem. |

**Examples are:**

- Depth First Search,
- Breadth First Search,
- Depth limited search,
- Iterative Deepening DFS,
- Bi-directional search

**Examples are:**

- Best first search
- Greedy search
- A* search


## Breadth-First Search (BFS) Overview

Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node in the case of a graph) and explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

### Key Points of BFS

- **Level-by-Level Traversal:** BFS visits all nodes at the present depth level before moving on to nodes at the next depth level.
- **Queue Data Structure:** BFS uses a queue to keep track of the nodes that need to be explored.
- **Shortest Path in Unweighted Graph:** BFS can be used to find the shortest path in an unweighted graph.
- **Space Complexity:** The space complexity is \( O(V) \), where \( V \) is the number of vertices in the graph.
- **Time Complexity:** The time complexity is \( O(V + E) \), where \( E \) is the number of edges in the graph.

### Steps of BFS

1. Start from the root node (or any arbitrary node in a graph).
2. Initialize a queue and enqueue the root node.
3. Mark the root node as visited.
4. While the queue is not empty:
    - Dequeue a node from the queue.
    - Process the dequeued node.
    - Enqueue all unvisited neighbors of the dequeued node and mark them as visited.

### BFS Example in Python
```
    A
   / \
  B   C
 / \   \
D   E   F
```
```
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B'],
    'F': ['C']
}
```
```
from collections import deque

def bfs(graph, start_node):
    visited = set()  # To keep track of visited nodes
    queue = deque([start_node])  # Initialize the queue with the start node
    visited.add(start_node)

    while queue:
        node = queue.popleft()  # Dequeue a node
        print(node, end=" ")  # Process the node (print it)

        # Enqueue all unvisited neighbors
        for neighbor in graph[node]:
            if neighbor not in visited:
                queue.append(neighbor)
                visited.add(neighbor)

# Perform BFS starting from node 'A'
bfs(graph, 'A')
```

```
A B C D E F
```

## Depth-First Search (DFS) Overview

Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node in the case of a graph) and explores as far as possible along each branch before backtracking.

### Key Points of DFS

- **Depth-First Traversal:** DFS explores as far as possible along each branch before backtracking.
- **Stack Data Structure:** DFS can be implemented using a stack (either explicitly with a stack data structure or implicitly with recursion).
- **Space Complexity:** The space complexity is \( O(V) \), where \( V \) is the number of vertices in the graph.
- **Time Complexity:** The time complexity is \( O(V + E) \), where \( E \) is the number of edges in the graph.

### Steps of DFS

1. Start from the root node (or any arbitrary node in a graph).
2. Mark the root node as visited.
3. Explore each neighbor:
    - Recursively apply DFS to each unvisited neighbor.
    - Backtrack to explore other unvisited branches.

### DFS Example in Python

Let's consider a simple graph represented as an adjacency list and perform DFS starting from node A.

```
    A
   / \
  B   C
 / \   \
D   E   F
```

**Example graph represented as an adjacency list**
```
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}
```
```
def dfs(graph, start_node, visited=None):
    if visited is None:
        visited = set()

    visited.add(start_node)
    print(start_node, end=" ")  # Process the node (print it)

    # Recursively apply DFS to each unvisited neighbor
    for neighbor in graph[start_node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Perform DFS starting from node 'A'
dfs(graph, 'A')
```
```
A B D E C F
```

## Iterative Deepening Depth-First Search (IDDFS)

### What is IDDFS?
**Iterative Deepening Depth-First Search (IDDFS)** combines the benefits of Depth-First Search (DFS) and Breadth-First Search (BFS).
- It performs a series of depth-limited searches, increasing the depth limit with each iteration until the goal is found.
- Essentially, it runs DFS multiple times with increasing depth limits.

### Why use IDDFS?
- **Completeness**: IDDFS is complete like BFS, meaning it will find a solution if one exists.
- **Space Efficiency**: IDDFS uses less memory than BFS as it only stores a stack of nodes, not all nodes at the current level.
- **Optimality**: It can find the shortest path to the goal if the path cost is uniform.

### How IDDFS works:
1. Start with a depth limit of 0.
2. Perform a depth-limited DFS.
3. If the goal is found, return it.
4. If the goal is not found, increase the depth limit and repeat step 2.

```
         A
       / | \
      B  C  D
     / \     \
    E   F     G
       / \
      H   I
```

```
Suppose we want to find node I.

IDDFS Steps:
Depth limit 0: Visit A.
Depth limit 1: Visit A, B, C, D.
Depth limit 2: Visit A, B, E, F, C, D, G.
Depth limit 3: Visit A, B, E, F, H, I (goal found).
```

```
class Node:
    def __init__(self, value):
        self.value = value
        self.children = []

def depth_limited_search(node, goal, depth):
    if depth == 0 and node.value == goal:
        return node
    if depth > 0:
        for child in node.children:
            found = depth_limited_search(child, goal, depth - 1)
            if found:
                return found
    return None

def iterative_deepening_dfs(root, goal):
    depth = 0
    while True:
        result = depth_limited_search(root, goal, depth)
        if result is not None:
            return result
        depth += 1

# Example tree
root = Node('A')
root.children = [Node('B'), Node('C'), Node('D')]
root.children[0].children = [Node('E'), Node('F')]
root.children[2].children = [Node('G')]
root.children[0].children[1].children = [Node('H'), Node('I')]

# Search for node 'I'
goal_node = iterative_deepening_dfs(root, 'I')
if goal_node:
    print(f"Goal node found: {goal_node.value}")
else:
    print("Goal node not found")
```

```
Goal node found:I
```

## Bidirectional Search

### What is Bidirectional Search?
**Bidirectional Search** is an algorithm that simultaneously searches from the initial state and the goal state, meeting in the middle. This approach can be more efficient than traditional search methods, particularly for large search spaces.

### Key Points
- **Dual Search Fronts**: Two searches are performed, one from the start and one from the goal.
- **Meeting Point**: The searches continue until the frontiers of the two searches intersect.
- **Efficiency**: Reduces the search space by a factor of roughly √b^d, where b is the branching factor and d is the depth.

### Why use Bidirectional Search?
- **Reduced Time Complexity**: Potentially halves the search space compared to unidirectional search.
- **Space Efficiency**: Although it requires storing nodes from both searches, the space requirement can be more manageable compared to a single search that explores the entire space.

```
    A
   / \
  B   C
 / \   \
D   E   F
     \ /
      G
```

```
Start Node: A
Goal Node: G

Bidirectional Search:

Forward Search: From A, exploring nodes B, C, D, E, F, G.
Backward Search: From G, exploring nodes E, C, B, A.
The searches meet when nodes overlap.
```

```
from collections import deque

def bidirectional_search(graph, start, goal):
    if start == goal:
        return [start]
    
    # Initialize the frontiers
    frontier_start = deque([start])
    frontier_goal = deque([goal])
    
    # Initialize visited sets
    visited_start = set([start])
    visited_goal = set([goal])
    
    # Initialize parent maps
    parent_start = {start: None}
    parent_goal = {goal: None}
    
    while frontier_start and frontier_goal:
        # Expand the frontier from the start
        node = frontier_start.popleft()
        for neighbor in graph[node]:
            if neighbor in visited_goal:
                # Path found
                return reconstruct_path(parent_start, parent_goal, neighbor)
            if neighbor not in visited_start:
                visited_start.add(neighbor)
                frontier_start.append(neighbor)
                parent_start[neighbor] = node
        
        # Expand the frontier from the goal
        node = frontier_goal.popleft()
        for neighbor in graph[node]:
            if neighbor in visited_start:
                # Path found
                return reconstruct_path(parent_start, parent_goal, neighbor)
            if neighbor not in visited_goal:
                visited_goal.add(neighbor)
                frontier_goal.append(neighbor)
                parent_goal[neighbor] = node
    
    return None

def reconstruct_path(parent_start, parent_goal, meeting_point):
    path_start = []
    path_goal = []
    
    # Reconstruct path from start to meeting point
    node = meeting_point
    while node is not None:
        path_start.append(node)
        node = parent_start[node]
    path_start.reverse()
    
    # Reconstruct path from meeting point to goal
    node = meeting_point
    while node is not None:
        path_goal.append(node)
        node = parent_goal[node]
    
    return path_start + path_goal[1:]

# Example graph
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'G'],
    'F': ['C', 'G'],
    'G': ['E', 'F']
}

# Search for path from 'A' to 'G'
path = bidirectional_search(graph, 'A', 'G')
if path:
    print(f"Path found: {path}")
else:
    print("No path found")
```

```
Path found
```

## Comparison of Search Algorithms

| Feature                       | BFS (Breadth-First Search)   | DFS (Depth-First Search)      | IDDFS (Iterative Deepening DFS) | Bidirectional Search         |
|-------------------------------|-------------------------------|--------------------------------|--------------------------------|------------------------------|
| **Search Method**             | Level-wise, breadth-first     | Depth-wise, depth-first        | Combination of DFS with increasing depth limits | Dual search fronts, from start and goal |
| **Completeness**              | Yes                           | Yes, if the search space is finite | Yes, like BFS                 | Yes, like BFS                |
| **Optimality**                | Yes, if path costs are uniform| No, may not find the shortest path | Yes, if path costs are uniform | Yes, if path costs are uniform |
| **Time Complexity**           | O(b^d)                        | O(b^d)                          | O(b^d), where d is the depth of the shallowest goal | O(b^(d/2))                   |
| **Space Complexity**          | O(b^d)                        | O(b*d)                          | O(b*d)                         | O(b^d/2)                     |
| **Memory Usage**              | High, stores all nodes at current level | Low, only stores a single path | Moderate, combines DFS and BFS approaches | Moderate, uses two frontiers |
| **When to Use**               | When the shortest path is required or in unweighted graphs | When memory is limited and a path is needed | When memory is limited but completeness is important | When the search space is large and path finding is needed |
| **Example Use Cases**         | Shortest path in unweighted graphs, level-order traversal | Depth-limited problems, puzzles | Problems with unknown solution depth | Large search spaces with known start and goal |

