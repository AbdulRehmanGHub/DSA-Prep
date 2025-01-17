// // creating Node
// class Node {
//   constructor(value) {
//     this.head = value;
//     this.next = null;
//   }
// }

// // creating LinkedList and linking with Node
// class linkedList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }
// }

// // providing length to linkedlist
// const myLinkedList = new linkedList(1);
// console.log(myLinkedList);

// // --------------------------------------- // //

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class linkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // // push a Node to our LinkedList (add Node in the last of Linkedlist)
  push(value) {
    let newNode = new Node(value);

    // // condition  - if in case of our linkedlist is empty.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // // pop a Node from our LinkedList (delete a last Node)
  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  // // unshift a Node in our LinkedList (add Node in the start of LinkedList)
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  // // shift a Node in our LinkedList (delete first Node from LinkedList)
  shift() {
    if (!this.head) {
      return undefined;
    }

    // point the first Node node/element
    let temp = this.head;

    // move the header to next node/element
    this.head = this.head.next;

    // remove first node/element
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
  }

  // // get first Node from our LinkedList (show the first Node of LinkedList)
  getFirst() {
    return this.head;
  }

  // // get the last Node from our LinkedList (show the last Node of the LinkedList)
  getLast() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    while (temp) {
      if (!temp.next) {
        return temp;
      }

      temp = temp.next;
    }
  }

  // // search the Node in LinkedList according to given value.
  get(index) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        return temp;
      }

      counter++;
      temp = temp.next;
    }
    return null;
  }

  // // Update/Modify the value of Node. Consider it like an update method, where we can update the value of Node in our LinkedList.
  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  // // allows us to add new Node anywhere(start, mid, end etc.) in the linkedList
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);

    // // use get method to find the node right before the desired position (index - 1).

    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  // // gives us the total Number of Nodes inside our LinkedList - (i.e 1 or 3 or any number.)
  size() {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      counter++;
      temp = temp.next;
    }

    return counter;
  }

  // // this will remove all the Nodes from our LinkedList - empty the linkedList
  clear() {
    this.head = null;
  }
}

const myLinkedList = new linkedList(0);
// myLinkedList.push(5); // push/add a newNode(5) to our linkedlist at last
// myLinkedList.push(10); // push/add a newNode(10) to our linkedlist at last
// myLinkedList.pop(); // pop/delete last Node from our linkedlist
// myLinkedList.unshift(2); // unshift/add a newNode(2) to our linkedlist at start
// myLinkedList.shift(); // shift/remove first Node from our linkedlist
// myLinkedList.getFirst(); // showing the first Node of our Linkedlist
// myLinkedList.getLast(); // showing the last Node of our Linkedlist

// console.log(myLinkedList);

// myLinkedList.push(10);
// myLinkedList.push(20);
// console.log(myLinkedList.get(4)); // search the Node according to given value

myLinkedList.push(10);
myLinkedList.push(20);

// console.log(myLinkedList.set(2, 500)); // true
// console.log(myLinkedList);         // the value of Node is updated now.

// console.log(myLinkedList.insert(0, 111)); // true
// console.log(myLinkedList); // the new Node is added successfully in the given location.

// console.log(myLinkedList.size()); // this will provide the size of our Nodes in linkedList like 2 or 5 etc.

console.log(myLinkedList.clear()); // this is give result undefined, because our linkedlist is empty now
