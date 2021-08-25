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


//Linked lists

describe("Linked List", () => {
 it("Should implement insertHead", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  assert.equal(chain.head.data, 1);
 });
 it("Should implement size", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  assert.equal(chain.size(), 1);
 });
 it("Should implement getHead", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  assert.equal(chain.getHead().data, 1);
 });
 it("Should implement getTail", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  assert.equal(chain.getTail().data, 1);
 });
 it("Should implement clear", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  chain.clear();
  assert.equal(chain.size(), 0);
 });
 it("Should implement removeHead", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  chain.removeHead();
  assert.equal(chain.size(), 0);
 });
 it("Should implement removeTail", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  chain.removeTail();
  assert.equal(chain.size(), 0);
 });
 it("Should implement insertTail", () => {
  const chain = new LinkedList();
  chain.insertTail(1);
  assert.equal(chain.getTail().data, 1);
 });
 it("Should implement getAt", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  assert.equal(chain.getAt(0).data, 1);
 });
 it("Should implement removeAt", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  chain.removeAt(0);
  assert.equal(chain.size(), 0);
 });
 it("Should implement insertAt", () => {
  const chain = new LinkedList();
  chain.insertAt(0, 1);
  assert.equal(chain.getAt(0).data, 1);
 });
 it("Should implement forEach", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  chain.insertHead(2);
  chain.forEach((node, index) => (node.data = node.data + index));
  assert.equal(chain.getTail().data, 2);
 });
 it("Should implement iterator", () => {
  const chain = new LinkedList();
  chain.insertHead(1);
  chain.insertHead(2);
  for (let node of chain) node.data = node.data + 1;
  assert.equal(chain.getTail().data, 2);
 });
});

