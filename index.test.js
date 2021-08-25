//Data Structure Algorithms

const { Queue, weave, Queue3 } = require('./index.js');

//Queues

describe('Weaving with Queues', () => {
  test('Should weave two queues together', () => {
    const one = new Queue();
    one.enqueue(1);
    one.enqueue(2);
    one.enqueue(3);
    const two = new Queue();
    two.enqueue('one');
    two.enqueue('two');
    two.enqueue('three');
    const result = weave(one, two);
    expect(result.dequeue()).toEqual(1);
    expect(result.dequeue()).toEqual('one');
    expect(result.dequeue()).toEqual(2);
    expect(result.dequeue()).toEqual('two');
    expect(result.dequeue()).toEqual(3);
    expect(result.dequeue()).toEqual('three');
    expect(result.dequeue()).toEqual(undefined);
  });
});

//Stacks

describe("Queue from Stacks", () => {
 test("Should implement queue using two stacks", () => {
  const queue = new Queue3();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.peek()).toEqual(1);
  expect(queue.dequeue()).toEqual(1);
  expect(queue.dequeue()).toEqual(2);
  expect(queue.dequeue()).toEqual(3);
  expect(queue.dequeue()).toEqual(undefined);
 });
});
