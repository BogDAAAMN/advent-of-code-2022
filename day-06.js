const fs = require("fs");
const input = fs.readFileSync("input/day-06.txt", "utf8");

const signal = input;

// Check if all letters of a string are unique
const checkUniqueSequence = (str) => {
  return new Set(str).size === str.length;
};

// Part 1: Find start-of-packet marker
// Check for packets every 4 letters
for (let i = 0; i < signal.length; i += 1) {
  // Slice for 4 characters string
  const packet = signal.slice(i, i + 4);
  const uniquePacketFound = checkUniqueSequence(packet);

  // Old school break
  if (uniquePacketFound) {
    found = i;
    break;
  }
}

console.log("start of packet", found + 4);

// Part 2: Find start-of-message marker
// Check for packets every 14 letters
for (let i = 0; i < signal.length; i += 1) {
  // Slice for 14 characters string
  const packet = signal.slice(i, i + 14);
  const uniquePacketFound = checkUniqueSequence(packet);

  // Old school break
  if (uniquePacketFound) {
    found = i;
    break;
  }
}

console.log("start of message", found + 14);
