
//  Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

import fs from "fs";

// Read the input file asynchronously

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }

  part1(data);
});

function part1(input: string) {
  const lines = input.split("\n");



}

