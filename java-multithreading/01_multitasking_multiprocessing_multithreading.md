## 1. **Multitasking**
- **Definition:** Running multiple tasks (programs or processes) simultaneously on a single CPU.
- **How it works:** The operating system quickly switches between tasks, giving the illusion that they are running at the same time.
- **Example:** Listening to music while typing a document.
- **Types:**
  - **Preemptive Multitasking:** The OS decides when to switch between tasks (used in most modern systems).
  - **Cooperative Multitasking:** Each task decides when to give control back to the OS (older systems).

## 2. **Multiprocessing**
- **Definition:** Running multiple processes simultaneously across multiple CPUs or cores.
- **How it works:** Each process runs independently on different CPUs/cores, allowing true parallel execution.
- **Example:** Running a video rendering process on one core while running a simulation on another.
- **Benefits:** Increases computational power and efficiency by utilizing multiple processors.
- **Overhead:** Higher than multithreading due to process isolation (separate memory spaces).

## 3. **Multithreading**
- **Definition:** Running multiple threads (smaller units of a process) concurrently within a single process.
- **How it works:** Threads share the same memory space but can run independently, allowing concurrent execution within a process.
- **Example:** A web server handling multiple requests simultaneously using separate threads.
- **Benefits:** Efficient use of CPU, lower overhead compared to multiprocessing, faster context switching.
- **Challenges:** Handling synchronization and avoiding race conditions can be complex.

## **Comparison Summary:**

- **Multitasking:** Focuses on switching between multiple tasks, providing an illusion of parallelism on a single CPU.
- **Multiprocessing:** Achieves true parallelism by running processes on multiple CPUs/cores, with higher overhead.
- **Multithreading:** Allows concurrent execution within a process using threads, sharing the same memory space with lower overhead than multiprocessing but requiring careful synchronization.

