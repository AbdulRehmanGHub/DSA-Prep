// Queue is following a FIFO method.
// For example, a line of people in the bank. Everyone is entertain on First Come First Served basis. First In First Out.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  // just like push - to add new Node in the end(last)
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;

    this.length++;
    return this;
  }

  // just like shift - to remove new Node from the start(first)
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}

const myQueue = new Queue(99);

myQueue.enqueue(199); // add 199 in the last
myQueue.enqueue(299); // add 299 in the last
myQueue.enqueue(500); // add 500 in the last
myQueue.enqueue(800); // add 800 in the last

myQueue.dequeue(); // removed the firstly written Node (99)
myQueue.dequeue(); // removed the second written Node (199)

console.log(myQueue);
