//Data Structure Algorithms
//Exercises and examples from this article:
//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038


//Queues

//Example from article
//A first in first out principle
class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(record) {
    this.data.unshift(record);
  }

  dequeue() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const weave = (queueOne, queueTwo) => {
  const queueCombined = new Queue();
  while (queueOne.peek() || queueTwo.peek()) {
    if (queueOne.peek()) queueCombined.enqueue(queueOne.dequeue());
    if (queueTwo.peek()) queueCombined.enqueue(queueTwo.dequeue());
  }
  return queueCombined;
};

//A queue where you can add at the beginning and remove at the end also, from this article:
//https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c
class Queue2 {
  constructor(...items) {
    this.reverse = false;
    this.queue = [...items];
  }

  enqueue(...items) {
    return this.reverse
      ? this.queue.push(...items)
      : this.queue.unshift(...items);
  }

  dequeue() {
    return this.reverse ? this.queue.shift() : this.queue.pop();
  }
}


//Stacks
//Example from article
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue3 {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  enqueue(record) {
    this.first.push(record);
  }

  dequeue() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}



module.exports = {
  Queue,
  weave,
  Queue3
  
};