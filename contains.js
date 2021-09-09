"use strict";

// function contains(string, value) {
// 	if (string.indexOf(value) > -1) {
// 		return true;
//   } else {
//     return false;
//   }
// }

// function contains(string, value) {
//   return string.indexOf(value) > -1 ? true : false
// }

// function contains(string, value) {
//   return string.match(value) ? true : false
// }

// function contains(string, value) {
//   return string.includes(value) ? true : false;
// }

function contains(string, value) {
  let i = 0;
  let v = 0;
  let contains = false;

  while (value.length > 0 && i < string.length) {
    if (string[i] === value[v]) {
      v++;

      if (v + 1 === value.length) {
        contains = true;
      }
    } else {
      if (v + 1 < value.length) {
        v = 0;
      }
    }
    i++;
  }

  return contains ? true : false;
}

// TEST CASES
const rooms = "Billiard Room,Kitchen,Conservatory,Hall,Lib,Dining Room";

console.log(contains(rooms, "Library") === false);

console.log(contains(rooms, "Hall") === true);
