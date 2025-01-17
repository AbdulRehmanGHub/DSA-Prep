// // the only difference b/w singly linkedlist and doubly linkedlist is the prev property which is available in the doubly linkedlist but not in singly linkedlist.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // this is the main difference.
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}


