const MyStack = require("./myStack");

test("Can pop off an item", () => {
  const stack = new MyStack(100);
  stack.Push("foo");
  expect(stack.Pop()).toBe("foo");
});

test("Can pop off multiple items", () => {
  const stack = new MyStack(100);
  stack.Push("foo");
  stack.Push("bar");
  expect(stack.Pop()).toBe("bar");
  expect(stack.Pop()).toBe("foo");
});

test("Can pop from an empty stack", () => {
  const stack = new MyStack(100);
  expect(stack.Pop()).toBe(null);
});

test("Should fail when pushing null", () => {
  const stack = new MyStack(100);
  expect(() => {
    stack.Push(null);
  }).toThrow("Item is null");
});
