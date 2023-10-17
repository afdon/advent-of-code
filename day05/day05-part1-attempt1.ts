

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

}

