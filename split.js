"use strict";

const rooms = "Billiard Room,Kitchen,Conservatory,Hall,Lib,Dining Room";
split(rooms, ",");
f;
function split(str, seperator) {
  const result = [];

  var currentWindow = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === seperator) {
      result.push(currentWindow);
      currentWindow = "";
    } else {
      currentWindow += str[i];
    }
    if (i === str.length - 1) {
      result.push(currentWindow);
      break;
    }
  }

  return result;
}
