"use strict";

module.exports = { NewArray };
function NewArray() {
  this.storage = {};
  this.length = 0;
}

NewArray.prototype.push = push;
NewArray.prototype.pop = pop;

//******************************
function push(value) {
  this.storage[this.length] = value;
  this.length++;
  return this.length;
}

function pop() {
  const temp = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return temp;
}
