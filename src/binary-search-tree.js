const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootValue = null;
  }

  root() {
    return this.rootValue;
  }

  add(data) {
    if (this.rootValue) {
      return this.rootValue.add(data);
    }
    this.rootValue = new Node(data);
  }

  has(data) {
    let current = this.rootValue;

    while (true) {
      if (current === null) {
        return false;
      }

      if (current.data === data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.rootValue;

    while (true) {
      if (current === null) {
        return null;
      }

      if (current.data === data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    let current = this.rootValue;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    let current = this.rootValue;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
