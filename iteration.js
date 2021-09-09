"use strict";

module.exports = {
  logEach,
  forEach,
  map,
  filter,
  reduce,
  callLater,
  partition,
};

function logEach(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
  }
}

function forEach(collection, callback) {
  for (let i = 0; i < collection.length; i++) {
    callback(collection[i], i, collection);
  }
}

function map(collection, callback) {
  var out = [];
  forEach(collection, addToMap);
  return out;

  //************************** */
  function addToMap(el, i, arr) {
    out.push(callback(el, i, arr));
  }
}

function filter(collection, predicate) {
  var out = [];
  forEach(collection, filterElement);
  return out;

  //***************************** */
  function filterElement(element) {
    if (predicate(element)) {
      out.push(element);
    }
  }
}

function reduce(collection, iteree, accumulator) {
  forEach(collection, doRecuction);
  return accumulator;

  //***************************
  function doRecuction(element, i, arr) {
    accumulator = iteree(accumulator, element, i, arr);
  }
}

// a function that can be called three times, with one argument each time.
function callLater(callback) {
  var args = [];
  return call;

  //************************** */
  function call(arg) {
    if (args.length + 1 === callback.length) {
      // adding one more would give the callback everything it needs
      args.push(arg);
      return callback.apply({}, args);
    } else {
      args.push(arg);
      return call;
    }
  }
}

function partition(collection, callback) {
  return reduce(collection, addToPartition, [[], []]);

  //***************** */
  function addToPartition(acc, el, i, arr) {
    if (callback(el)) acc[0].push(el);
    else acc[1].push(el);
    return acc;
  }
}

/*  
I heard while loops are bad because they "introduce the potential for an unbounded computation," (infinite loop?) -- and that we should not use them, and stick to for loops.

is that true? wont a recursive function without a valid base case do the same thing?  wont any type of loop have the potential to do that, like with your times zero problem earlier?

she answered before i could ask -- do the one that is most readable. 
*/
