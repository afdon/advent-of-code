

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

function part1(input: string) {
//   const lines = input.split("\n");

    const initialState = input.split("\n").slice(0, 10);
    console.log("initial state: ", initialState)

    const instructions = input.split("\n").slice(10)
    console.log("instructions: ", instructions)

    console.log("initialState's type is:", typeof initialState)
    getNumberOfStacks(initialState)

}

function getNumberOfStacks(initial) {
    const stacksArray = initial[initial.length - 2].trim().split("   ") // trim; split by 3 spaces
    console.log("stacks array", stacksArray)
}

function createRepresentation(initial) {
    // grab the last line.

}