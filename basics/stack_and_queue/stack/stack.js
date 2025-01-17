// Stack is following a LIFO method.
// For example, a numbers of plates put one by one. So, if anyone want to out/get the plate he/she can pick the first plate and then so on. Like the last putted item will be out first. Last In First Out.

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

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;

    this.first = this.first.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}

let myStack = new Stack(0);

myStack.push(5); // add 5
myStack.push(10); // add 10
myStack.push(99); // add 99
myStack.pop(); // remove last added (99)

console.log(myStack);
