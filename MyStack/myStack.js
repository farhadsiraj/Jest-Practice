class MyStack {
  constructor(capacity) {
    this.capacity = capacity;
    this.container = Array(this.capacity);
    this.index = 0;
  }

  Push(item) {
    if (item === null) {
      throw new Error("Item is null");
    }
    this.container[this.index] = item;
    this.index++;
  }
  Pop() {
    if (this.index === 0) return null;

    const item = this.container[this.index - 1];
    this.index--;
    return item;
  }
}

module.exports = MyStack;
