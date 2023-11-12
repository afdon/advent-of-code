// Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

// if the children contains any directories, find their children.
// If the children do not contain any directories, print their file size
// add the file size to each of its parents, up the chain.
// else (it's a file), add its filesize to the total.

import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input file:", err);
    return;
  }
  part1(data);
});

let directories: {}
let storage: {} = {};

function part1(input: string) {
  const lines = input.split("\n");



}


