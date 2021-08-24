//Data Structure Algorithms
//Exercises and examples from this article:
//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038


//Queues
//Example with a first in first out principle
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


module.exports = {
  Queue,
  weave
};