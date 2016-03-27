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

    this.traverse = function(node, callback) {
        if (node !== null) {
            this.traverse(node.left, callback);
            callback(node);
            this.traverse(node.right, callback);
        }
    };

    this.delete = function(value) {
        var found = false;
        var current = this.root;
        var parent = null;

        // find node to delete
        while (!found && current) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else {
                found = true;
            }
        }

        if (found) {
            if (parent) {
                if (current.left == null && current.right == null) { // leaf node
                    if (value > parent.value) {
                        parent.right = null;
                    } else {
                        parent.left = null;
                    }
                } else if (current.left == null || current.right == null) { // 1 child
                    var childNode = current.left ? current.left : current.right;
                    if (value > parent.value) {
                        parent.right = childNode;
                    } else {
                        parent.left = childNode;
                    }
                } else { // 2 children

                }
            } else { // no parent, meaning root node

            }
        } else { // not in tree, return
            return;
        }
    };
}


var consoleCallback = function(node) {
    console.log(node.value);
};

var bTree = new BinaryTree();
for (var i=0; i<10; i++) {
    var value = Math.floor((Math.random() * 100) + 1);
    bTree.insert(value);
}
bTree.traverse(bTree.root, consoleCallback);