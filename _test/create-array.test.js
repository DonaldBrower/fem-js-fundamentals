"use strict";

// const spy = jest.spyOn(console, "log").mockImplementation();

var { NewArray } = require("../create-array.js");

test("logEach(collection) -- should call console.log() once for every element of the collection", () => {
  const myArray = new NewArray();
  myArray.push(11);
  myArray.push(12);
  myArray.push(13);
  myArray.push(14);
  myArray.push(15);
  myArray.push(16);

  expect(myArray).toEqual({
    storage: {
      0: 11,
      1: 12,
      2: 13,
      3: 14,
      4: 15,
      5: 16,
    },
    length: 6,
  });
  expect(myArray.push(17)).toEqual(7);

  expect(myArray).toEqual({
    storage: {
      0: 11,
      1: 12,
      2: 13,
      3: 14,
      4: 15,
      5: 16,
      6: 17,
    },
    length: 7,
  });

  expect(myArray.pop()).toBe(17);
  expect(myArray).toEqual({
    storage: {
      0: 11,
      1: 12,
      2: 13,
      3: 14,
      4: 15,
      5: 16,
    },
    length: 6,
  });
});
