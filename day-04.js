const fs = require("fs");
const input = fs.readFileSync("input/day-04.txt", "utf8");

// Split input into lines
const lines = input.split("\n");

// Part one: find how many ranges are contained in the other
const containedRangesCounter = lines.reduce((acc, line) => {
  // Split line into two the two ranges
  const ranges = line.split(",");

  const firstElf = ranges[0].split("-").map((n) => parseInt(n));
  const secondElf = ranges[1].split("-").map((n) => parseInt(n));

  // Check if the first range is contained in the second range
  if (secondElf[0] >= firstElf[0] && secondElf[1] <= firstElf[1]) {
    return acc + 1;
  }

  // Check if the second range is part of the first one
  if (firstElf[0] >= secondElf[0] && firstElf[1] <= secondElf[1]) {
    return acc + 1;
  }

  return acc;
}, 0);

console.log("containedRangesCounter", containedRangesCounter);

// Part two: find how many ranges overlap
const overlappingRangesCounter = lines.reduce((acc, line) => {
  // Split line into two the two ranges
  const ranges = line.split(",");

  const firstElf = ranges[0].split("-").map((v) => parseInt(v));
  const secondElf = ranges[1].split("-").map((v) => parseInt(v));

  // Check if the first range overlaps the second range
  if (secondElf[0] <= firstElf[1] && secondElf[1] >= firstElf[1]) {
    return acc + 1;
  }

  // Check if the second range overlaps the first range
  if (firstElf[0] <= secondElf[1] && firstElf[1] >= secondElf[1]) {
    return acc + 1;
  }

  return acc;
}, 0);

console.log("overlappingRangesCounter", overlappingRangesCounter);
