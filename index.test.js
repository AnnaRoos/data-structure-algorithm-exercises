//Data Structure Algorithms

const { Queue, weave } = require('./index.js');

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
