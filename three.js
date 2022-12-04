const fs = require("fs");
const input = fs.readFileSync("input/three.txt", "utf8");

// Split input into lines
const lines = input.split("\n");

// Part one: Find the common item in both compartiments of each rucksack
const itemsPriority = lines.reduce((priority, line) => {
  // Split line into two arrays
  const lineLength = line.length;
  const items = line.split("");

  const firstCompartment = items.slice(0, lineLength / 2);
  const secondCompartment = items.slice(lineLength / 2);

  // Find the common item
  const commonItem = firstCompartment.find((letter) => {
    return secondCompartment.includes(letter);
  });

  // Offset the priorities by upper/lower case
  if (commonItem === commonItem.toUpperCase()) {
    priority += commonItem.charCodeAt(0) - 38;
  } else {
    priority += commonItem.charCodeAt(0) - 96;
  }

  return priority;
}, 0);

console.log("itemsPriority", itemsPriority);

// Part two: Find the common item across groups of three rucksacks
const rucksackPriority = lines.reduce((priority, line, index) => {
  if (index % 3 === 0) {
    // Split the input in group of three lines (skip lines in between)
    const firstRucksack = line;
    const secondRucksack = lines[index + 1];
    const thirdRucksack = lines[index + 2];

    // Find the common item
    const commonItem = firstRucksack.split("").find((letter) => {
      return secondRucksack.includes(letter) && thirdRucksack.includes(letter);
    });
    // Offset the priorities by upper/lower case
    if (commonItem === commonItem.toUpperCase()) {
      priority += commonItem.charCodeAt(0) - 38;
    } else {
      priority += commonItem.charCodeAt(0) - 96;
    }

    return priority;
  }

  return priority;
}, 0);

console.log("rucksackPriority", rucksackPriority);
