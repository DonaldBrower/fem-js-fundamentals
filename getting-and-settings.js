function setValue(object, path, value) {
  object[path] = value;
}

// TEST CASES
const who = { name: "Colonel Mustard" };
setValue(who, "name", "Colonel Ketchup");

// We should be able to set a property to a value.
console.log(
  "1. // We should be able to set a property to a value.",
  who.name === "Colonel Ketchup"
);

//************************

function getValue(object, key, defaultValue) {}

const CLUE = "It wasn't in the Billiard Room.";
// TEST CASES
const mysteriousEnvelope = { clue: CLUE };

// We should be able to get the value for a given property.
console.log(
  "1. We should be able to get the value for a given property.",
  getValue(mysteriousEnvelope, "clue") === CLUE
);

// We should get undefined if nothing exists for a given property.
console.log(
  "2: We should get undefined if nothing exists for a given property.",
  getValue(mysteriousEnvelope, "more clues") === undefined
);

// We should get the default value if nothing exists for a given property.
console.log(
  "3: We should get the default value if nothing exists for a given property.",
  getValue(mysteriousEnvelope, "room", "nothing found") === "nothing found"
);

function head(array) {
  return array[0] || undefined;
}

// TEST CASES
const weapons = [
  "Revolver",
  "Knife",
  "Lead Pipe",
  "Candlestick",
  "Rope",
  "Wrench",
];

// We should get the first element of the weapons array.
console.log(
  "1. // We should get the first element of the array.",
  head(weapons) === "Revolver"
);

//*******************

function nthValue(array, index) {
  if (index < 0) {
    return array[array.length + index] || undefined;
  } else {
    return array[index] || undefined;
  }
}

// TEST CASES
const weapons = [
  "Revolver",
  "Lead Pipe",
  "Candlestick",
  "Rope",
  "Knife",
  "Wrench",
];

console.log(nthValue(weapons, 0) === "Revolver");

// NEAT: nthValue(weapons, 0) is equivalent to head(weapons)

console.log(nthValue(weapons, -2) === "Knife");
