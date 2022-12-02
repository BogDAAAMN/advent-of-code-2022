const fs = require("fs");
const input = fs.readFileSync("input/two.txt", "utf8");

// Split input into lines
const lines = input.split("\n");

// Round one: Reducer to add the points based on rules
const pointsRoundOne = lines.reduce((acc, line) => {
  const [opponentOption, myOption] = line.split(" ");
  if (myOption === "X") {
    acc += 1; // rock

    if (opponentOption === "A") {
      acc += 3; // draw rock
    } else if (opponentOption === "C") {
      acc += 6; // win scissors
    }
  } else if (myOption === "Y") {
    acc += 2; // paper

    if (opponentOption === "A") {
      acc += 6; // win rock
    } else if (opponentOption === "B") {
      acc += 3; // draw paper
    }
  } else if (myOption === "Z") {
    acc += 3; // scissors

    if (opponentOption === "B") {
      acc += 6; // win paper
    } else if (opponentOption === "C") {
      acc += 3; // draw scissors
    }
  }

  return acc;
}, 0);

console.log("pointsRoundOne", pointsRoundOne);

// Round two: Reducer to add the points based on the new rules
const pointsRoundTwo = lines.reduce((acc, line) => {
  const [opponentOption, outcome] = line.split(" ");
  if (opponentOption === "A") {
    if (outcome === "X") {
      acc += 3; // scissors
    } else if (outcome === "Y") {
      acc += 1; // rock
      acc += 3; // draw
    } else if (outcome === "Z") {
      acc += 2; // paper
      acc += 6; // win
    }
  } else if (opponentOption === "B") {
    if (outcome === "X") {
      acc += 1; // rock
    } else if (outcome === "Y") {
      acc += 2; // paper
      acc += 3; // draw
    } else if (outcome === "Z") {
      acc += 3; // scissors
      acc += 6; // win
    }
  } else if (opponentOption === "C") {
    if (outcome === "X") {
      acc += 2; // paper
    } else if (outcome === "Y") {
      acc += 3; // sicssors
      acc += 3; // draw
    } else if (outcome === "Z") {
      acc += 1; // rock
      acc += 6; // win
    }
  }

  return acc;
}, 0);

console.log("pointsRoundTwo", pointsRoundTwo);
