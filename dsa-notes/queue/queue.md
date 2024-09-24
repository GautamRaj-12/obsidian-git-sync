# Queue

## What is a Queue?

- The queue data structure is a sequential collection of elements that follows the principle of First In First Out(FIFO)
- The first element inserted into the queue is first element to be removed.
- A queue of people. People enter the queue at one end(rear/tail) and leave the queue from the other end (front/head).
- Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model.
- The queue data structure supports two main operations
  - ***Enqueue***: It ads an element to the rear/tail of the collection.
  - ***Dequeue***: It removes and element from the front/head of the collection.

### Queue Visualization - ENQUEUE
![alt text](./images/image-1.png)

### Queue Visualization - DEQUEUE
![alt text](./images/image-2.png)

### Queue Usage

- Printers.
- CPU task scheduling.
- Callback queue in JS runtime.

### Queue Implementation
- ***enqueue(element)***: Add an element to the queue.
- ***dequeue***: remove the oldest element from the queue.
- ***peek()***: get the value of the element at the front of the queue without removing it.
- ***isEmpty()***:Check if the queue is empty.
- ***size()***:Get the number of elements in the queue.
- ***print()***: Visualize the elements in a queue.

## Circular Queue

### What is a circular queue?
- The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.
- Also referred to as circular buffer or ring buffer and follows the FIFO principle.
- A circular queue will reuse the empty block created during the dequeue operation
- When working with queues of fixed maximum size, a circular queue is a great implementation choice.
- The circular queue data structure supports two main operations:
  - ***Enqueue***:- It adds an element to the rear/tail of the collection.
  - ***Dequeue***:- It removes and element from the front/head of the collection.

### Circular Queue Visualization
![image](./images/image-3.png)

![image](./images/image-4.png)

### Circular Queue Usage
- Clock
- Streaming Data
- Traffic Lights