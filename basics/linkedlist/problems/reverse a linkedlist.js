class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class linkedlist {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // // push for adding elements in linkedlist
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  // // all the other things are remains same like linkedlist, push method etc as we previously covered. Only we have to create reverse method for this problem.
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = this.head;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

let myLinkedList = new linkedlist(0);

myLinkedList.push(11);
myLinkedList.push(22);
myLinkedList.push(33);

// myLinkedList.reverse();          // this will reverse our linkedlist

console.log(myLinkedList);
