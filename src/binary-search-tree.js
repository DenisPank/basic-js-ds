const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    if (!this.radical) {
      this.radical = null;
      return this.radical;
    }
    return this.radical;
  }
  add(data) {
    return (this.radical = addData(this.radical, data));
    function addData(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (node.data > value) {
        node.left = addData(node.left, value);
      } else {
        node.right = addData(node.right, value);
      }

      return node;
    }
  }
  has(data) {
    return search(this.radical, data);
    function search(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      return node.data > value
        ? search(node.left, value)
        : search(node.right, value);
    }
  }

  find(data) {
    return findFunction(this.radical, data);
    function findFunction(node, value) {
      if (!node) {
        return null;
      }
      if (node.data < value) {
        return findFunction(node.right, value);
      } else if (node.data > value) {
        return findFunction(node.left, value);
      } else if (node.data === value) {
        return node;
      }
    }
  }

  remove(data) {
    return (this.radical = removeData(this.radical, data));
    function removeData(node, value) {
      if (!node) {
        return null;
      }
      if (node.data < value) {
        node.right = removeData(node.right, value);
        return node;
      } else if (node.data > value) {
        node.left = removeData(node.left, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        let minValueRight = node.right;
        while (minValueRight.left) {
          minValueRight = minValueRight.left;
        }
        node.data = minValueRight.data;
        node.right = removeData(node.right, minValueRight.data);
        return node;
      }
    }
  }
  min() {
    if (!this.radical) {
      return;
    }
    let minimal = this.radical;
    while (minimal.left) {
      minimal = minimal.left;
    }
    return minimal.data;
  }
  max() {
    if (!this.radical) {
      return null;
    }
    let maximum = this.radical;
    while (maximum.right) {
      maximum = maximum.right;
    }
    return maximum.data;
  }
}

module.exports = {
  BinarySearchTree,
};
