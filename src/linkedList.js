'use strict';

const Node = require('./node.js');

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
}

LinkedList.prototype.append = (value) => {
  let node = new Node(value),
    currentNode = this.head;
  //first use is an empty list
  if (!currentNode) {
    this.tail = node;
    this.length++;

    return node;
  }
  //second use is a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this.length++;
  return node;
};

LinkedList.prototype.prepend = (value) => {
  let node = new Node(value),
    currentNode = this.head;
  //first use is an empty list
  if (!currentNode) {
    this.head = node;
    this.length++;

    return node;
  }
  //second use is a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this.length++;
  return node;
};

LinkedList.prototype.reverse = (value) => {
  let node = new Node(value);
  let previous = null;
  let currentNode = this.tail;
  if (currentNode.value === value) {
    this.head = node;
    this.head.next = previous;
    return node;
  }
  while (currentNode.next) {
    if (currentNode.next.value === value) {
      break;
    }
    return this.head;
  }
};

module.exports = LinkedList;

