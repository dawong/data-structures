"use strict";

function Node(val) {
  this.value = val;
  this.right = null;
  this.left = null;
}

function BinaryTree() {
  this.root = null;

  this.insert = function(value) {
    if (this.root == null) {
      this.root = new Node(value);
    } else {
      var current = this.root;
      var tempNode = new Node(value);

      while (current !== null) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = tempNode;
            return;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = tempNode;
            return;
          } else {
            current = current.right;
          }
        } else {
          return;
        }
      }
    }
  };

  this.get = function(root, target) {
    if (root == null) {
      return null;
    }
    if (root.value == target) {
      return root;
    } else if (root.value < target) {
      return this.get(root.right, target);
    } else if (root.value > target) {
      return this.get(root.left, target);
    }
  };

  this.traverse = function(root, callback) {
    if (root !== null) {
      this.traverse(root.left, callback);
      callback(root);
      this.traverse(root.right, callback);
    }
  };

  this.delete = function(value) {
    var found = false;
    var current = this.root;

    while (!found && current) {
      if (value < current) {
        current = current.left;
      } else if (value > current) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (found) {
      //TODO: remove node and re-order values
    } else {
      return;
    }

  }
}


var consoleCallback = function(node) {
  console.log(node.value);
};

var bTree = new BinaryTree();
bTree.insert(5);
console.log(bTree);
bTree.insert(6);
console.log(bTree);
bTree.insert(4);
console.log(bTree);
var exists = bTree.get(bTree.root, 11);
console.log(exists);
bTree.traverse(bTree.root, consoleCallback);


