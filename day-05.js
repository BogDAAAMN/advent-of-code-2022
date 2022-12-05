const fs = require("fs");
const input = fs.readFileSync("input/day-05.txt", "utf8");

// Split the input on the double newline
const [cratesMapInput, moveRulesInput] = input.split("\n\n");

// Part one: Get the top crates after the input moves
const cratesMap = cratesMapInput
  .split("\n") // Split on newlines
  .map((line) => line.replace(/[\[\]]/g, " ")) // Remove the brackets
  .map((line) => line.split("")) // Split on each character to make it iterable
  .reduce((acc, line) => {
    line.map((crate, index) => {
      // Calculate the position of the crate
      // Every 3 + 1 characters is a new column
      const column = parseInt(index / 4) + 1;

      // Add crate to map if it is a letter
      if (crate.match(/[A-Z]/)) {
        // If the column is not in the map, then add it
        if (!acc[column]) {
          acc[column] = [];
        }

        // Add the crate to the map
        acc[column].push(crate);
      }
    });

    return acc;
  }, {});

// Update crates map based on the moves
moveRulesInput
  .split("\n") // Split on newlines
  .map((line) => line.match(/\d+/g)) // Match all numbers
  .map((line) => line.map(Number)) // Convert to numbers: move 1 from 2 to 1
  .forEach((line) => {
    const [move, from, to] = line;
    let moveIndex = move;

    while (moveIndex) {
      // Move the crate from the from column to the to column
      cratesMap[to] = [cratesMap[from][0], ...cratesMap[to]];

      // Remove the crate from the from column
      cratesMap[from] = cratesMap[from].slice(1);

      // To the next move (if not, exit the while)
      moveIndex -= 1;
    }
  });

//  Get the first element of each column in cratesMap
const topCratesResult = Object.values(cratesMap)
  .map((column) => column[0])
  .join("");

console.log("topCratesResult", topCratesResult);

// Part two: Get the top crates after the input moves but differently lol
const cratesMap = cratesMapInput
  .split("\n") // Split on newlines
  .map((line) => line.replace(/[\[\]]/g, " ")) // Remove the brackets
  .map((line) => line.split("")) // Split on each character to make it iterable
  .reduce((acc, line) => {
    line.map((crate, index) => {
      // Calculate the position of the crate
      // Every 3 + 1 characters is a new column
      const column = parseInt(index / 4) + 1;

      // Add crate to map if it is a letter
      if (crate.match(/[A-Z]/)) {
        // If the column is not in the map, then add it
        if (!acc[column]) {
          acc[column] = [];
        }

        // Add the crate to the map
        acc[column].push(crate);
      }
    });

    return acc;
  }, {});

// Update crates map based on the moves
moveRulesInput
  .split("\n") // Split on newlines
  .map((line) => line.match(/\d+/g)) // Match all numbers
  .map((line) => line.map(Number)) // Convert to numbers: move 1 from 2 to 1
  .forEach((line) => {
    const [move, from, to] = line;

    // Get first move elements from the from column
    const crates = cratesMap[from].slice(0, move);

    // Move the crates from the from column to the to column
    cratesMap[to] = [...crates, ...cratesMap[to]];

    // Remove the crates from the from column
    cratesMap[from] = cratesMap[from].slice(move);
  });

// Get the first element of each column in cratesMap
const topCratesResult = Object.values(cratesMap)
  .map((column) => column[0])
  .join("");

console.log("topCratesResult", topCratesResult);
