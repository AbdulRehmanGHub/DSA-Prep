# Data Structures & Algorithms (DSA) Notes 📚

## **1. Basics of DSA**
- **Data Structures**: Organize and store data (e.g., arrays, linked lists).
- **Algorithms**: Step-by-step procedures to solve problems (e.g., sorting, searching).

---

## **2. Arrays**
- **Definition**: Contiguous memory blocks storing elements with **indexes**.
- **Example**: 
  ```javascript
  let arr = [10, 20, 30]; // Index 0 → 10
  ```
- **Time Complexity**:
  - Access: `O(1)`
  - Insert/Delete: `O(n)`

---

## **3. Linked Lists**
- **Types**:
  - **Singly Linked List**: `Node → Node → Node`.
  - **Doubly Linked List**: `Node ↔ Node ↔ Node`.
- **Example**:
  ```javascript
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null; // For doubly: this.prev = null
    }
  }
  ```
- **Time Complexity**:
  - Insert/Delete at head: `O(1)`
  - Search: `O(n)`

---

## **4. Stack (LIFO)**
- **Operations**:
  - `push()`: Add to top.
  - `pop()`: Remove from top.
- **Example**: 
  ```javascript
  let stack = [];
  stack.push(5); // [5]
  stack.pop();   // []
  ```

---

## **5. Queue (FIFO)**
- **Operations**:
  - `enqueue()`: Add to back.
  - `dequeue()`: Remove from front.
- **Example**:
  ```javascript
  let queue = [];
  queue.push(1); // [1]
  queue.shift(); // []
  ```

---

## **6. Hash Tables**
- **Definition**: Key-value pairs using a **hash function**.
- **Example**:
  ```javascript
  let hashMap = { "name": "Ali", "age": 30 };
  ```
- **Collision Handling**: Chaining (linked lists at the same index).
- **Time Complexity**: Average `O(1)` for search/insert/delete.

---

## **7. Big O Notation**
| **Complexity** | **Example**                  | **Scenario**             |
|----------------|------------------------------|--------------------------|
| `O(1)`         | Array index access           | `arr[0]`                 |
| `O(n)`         | Looping through an array     | Linear search            |
| `O(n²)`        | Nested loops                 | Bubble sort              |
| `O(log n)`     | Binary search                | Divide and conquer       |
| `O(n log n)`   | Merge sort                   | Efficient sorting        |

---

## **8. Recursion**
- **Definition**: Function calls itself until a **base case**.
- **Example** (Factorial):
  ```javascript
  function factorial(n) {
    if (n === 1) return 1;      // Base case
    return n * factorial(n-1);  // Recursive call
  }
  ```

---

## **9. Trees**
- **Binary Tree**: Each node has ≤ 2 children.
- **Binary Search Tree (BST)**:
  - Left child < Parent < Right child.
  - **Time Complexity**: `O(log n)` for search (if balanced).
- **Example**:
  ```
      5
    /   \
   3     8
  ```

---

## **10. Graphs**
- **Components**:
  - **Vertices (Nodes)**: E.g., Users in a social network.
  - **Edges**: Connections between nodes (directed/undirected).
- **Traversal**:
  - **BFS**: Level-order traversal (uses a queue).
  - **DFS**: Explore deepest nodes first (uses a stack).

---

## **Real-World Analogies** 🌍
- **Stack**: Browser back button history.
- **Queue**: Printer job scheduling.
- **Hash Table**: Dictionary (word → definition).
- **Tree**: Organization hierarchy (CEO → Managers → Employees).