"use strict";

function Node(d) {
  this.data = d;
  this.next = null;
}

function LinkedList() {
  this.start = null;
  this.end = null;

  this.print = function() {
    var current = this.start;
    var ret = '';
    while (current !== null) {
      ret += current.data + ', ';
      current = current.next;
    }
    console.log(ret);
  };

  this.insertLast = function(data) {
    if (this.start === null) {
      this.start = new Node(data);
      this.end=this.start;
    } else {
      this.end.next = new Node(data);
      this.end = this.end.next;
    }
  };

  this.insertFirst = function(data) {
    var tempNode = new Node(data);
    tempNode.next = this.start;
    this.start = tempNode;
  };

  this.delete = function(data) {
    var current = this.start;
    var previous = this.start;
    while (current !== null) {
      if (current.data === data) {
        if (current == this.start) {
          this.start = current.next;
          return;
        }
        if (current == this.end) {
          this.end = previous;
        }
        previous.next = current. next;
        return;
      }
      previous = current;
      current = current.next;
    }
  };

  this.insertAfter = function(data, target) {
    var current = this.start;
    while (current !== null) {
      if (current.data == target) {
        var tempNode = new Node(data);
        tempNode.next = current.next;
        if (current == this.end) {
          this.end = tempNode;
        }
        current.next = tempNode;
        return;
      }
      current = current.next;
    }
  };

  this.insertBefore = function(data, target) {
    var current = this.start;
    var previous = this.start;
    while(current !== null) {
      if (current.data == target) {
        var tempNode = new Node(data);
        tempNode.next = current;
        if (current == this.start) {
          this.start = tempNode;
          return;
        }
        previous.next = tempNode;
        return;
      }
      previous = current;
      current = current.next;
    }
  };

  this.get = function(target) {
    var current = this.start;
    while (current !== null) {
      if (current.data == target) {
        return current;
      }
      current = current.next;
    }
  };
}

// test cases
var lister = new LinkedList();
for (var i=0; i<3; i++) {
  lister.insertLast("node" + i);
}

lister.insertFirst('loop');
lister.insertLast('poop');
lister.print();
lister.delete('node1');
lister.print();
lister.delete('loop');
lister.print();
lister.delete('poop');
lister.print();
lister.insertAfter('poop', 'node2');
lister.print();
lister.insertBefore('shoes', 'node0');
lister.print();