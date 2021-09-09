"use strict";

jest.spyOn(console, "log").mockImplementation();

var {
  logEach,
  forEach,
  map,
  filter,
  reduce,
  callLater,
  partition,
} = require("../iteration.js");

const rooms = [
  "Billiard Room",
  "Kitchen",
  "Library",
  "Conservatory",
  "Hall",
  "Dining Room",
];

test("logEach(collection) -- should call console.log() once for every element of the collection", () => {
  logEach(rooms);
  expect(console.log).toHaveBeenCalledTimes(6);
});

test("forEach(collection, callback) should make one call to callback for every element in the collection", () => {
  var changingValue = 0;
  forEach(rooms, increment);

  function increment(element, index, array) {
    changingValue++;
  }
  expect(changingValue).toEqual(6);
  //***
});

test("map(collection, callback) -- returns a new array with each element replaced by the return value of calling the callback with that element passed in", () => {
  var simple = [1, 2, 3];
  expect(map(simple, (e) => e + 1)).toStrictEqual([2, 3, 4]);
});

test("filter(collection, predicate) -- returns an array that doesn't include any values equal to 2", () => {
  var collection = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4];
  expect(filter(collection, (e) => (e === 2 ? false : true))).toStrictEqual([
    1, 3, 4,
  ]);
});

test("reduce(collection, iteree, accumulator) -- does my favorite reduction :)", () => {
  var target = "hello";
  var startingAcc = { total: 0 };
  //************************
  function addToMap(acc, val, i, arr) {
    if (!acc[val]) acc[val] = 1;
    else acc[val]++;
    acc.total++;
    return acc;
  }
  expect(reduce(target.split(""), addToMap, startingAcc)).toStrictEqual({
    h: 1,
    e: 1,
    l: 2,
    o: 1,
    total: 5,
  });
});

test("callLater(callback) -- callLater takes a function with three parameters, returns a function that can be called once with the first argument, again with the second, and with the third call and argument, the body of the function is ran with the parameter labels replaced with the arguments", () => {
  function displayWinningGuess(suspect, weapon, room) {
    return `It was ${suspect} in the ${room} with a ${weapon}`;
  }

  const guessSuspect = callLater(displayWinningGuess);

  const guessWeapon = guessSuspect("??");

  const guessRoom = guessWeapon("??");

  expect(guessRoom("??")).toEqual("It was ?? in the ?? with a ??");
});

test("callLater(callback) -- callLater takes a function with three parameters, returns a function that can be called once with the first argument, again with the second, and with the third call and argument, the body of the function is ran with the parameter labels replaced with the arguments", () => {
  var users = [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: true },
    { user: "pebbles", age: 1, active: false },
  ];

  expect(
    partition(users, function (o) {
      return o.active;
    })
  ).toStrictEqual([
    [{ user: "fred", age: 40, active: true }],
    [
      { user: "barney", age: 36, active: false },
      { user: "pebbles", age: 1, active: false },
    ],
  ]);
});
