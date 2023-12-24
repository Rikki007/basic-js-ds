class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(data) {
    if (data < this.data) {
      this.addLeft(data);
    } else {
      this.addRight(data);
    }
  }

  addLeft(data) {
    if (this.left) {
      return this.left.add(data);
    }
    this.left = new Node(data);
  }

  addRight(data) {
    if (this.right) {
      return this.right.add(data);
    }
    this.right = new Node(data);
  }
}

module.exports = {
  Node,
};
