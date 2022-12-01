const fs = require("fs");
const input = fs.readFileSync("input/one.txt", "utf8");

// Split numbers into groups split by empty lines
const groups = input
  .split("\n\n") // split into blocks
  .map((group) => {
    return group
      .split("\n") // split into rows
      .map((num) => parseInt(num)); // convert into numbers
  });

// Sum up numbers in each group
const sums = groups.reduce((acc, group) => {
  const sum = group.reduce((acc, num) => acc + num, 0);
  acc.push(sum);
  return acc;
}, []);

// Part one: Find the biggest number in sum
const max = Math.max(...sums);
console.log("max", max);

// Part two: find the three biggest numbers in sum
const maxFirst = sums.sort((a, b) => b - a).slice(0, 3);
const maxFirstSum = maxFirst.reduce((acc, num) => acc + num, 0);
console.log("maxFirstSum", maxFirstSum);
