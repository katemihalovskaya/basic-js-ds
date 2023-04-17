const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  node

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if(this.node === undefined) {
      this.node = new ListNode(value);
    } else {
      let node = this.node;
      while(node.next !== null) {
        node = node.next;
      }
      node.next = new ListNode(value);
    }
  }

  dequeue() {
    let node = this.node;
    if (this.node.next !== null) {
      this.node = this.node.next;
    } else {
      this.node = undefined;
    }
    return node.value;
  }
}

module.exports = {
  Queue
};
