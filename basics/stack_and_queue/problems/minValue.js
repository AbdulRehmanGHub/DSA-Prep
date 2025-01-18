// Find the minimum value in the Stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    }

    newNode.next = this.first;
    this.first = newNode;

    this.length++;
    return this;
  }

  min() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.first;
    let minVal = current.value;

    while (current.next) {
      current = current.next;

      if (current.value < minVal) {
        // console.log(current.value, minVal);
        minVal = current.value;
      }
    }

    return minVal;
  }
}

let myStack = new Stack(0);

myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack);

console.log(myStack.min());
