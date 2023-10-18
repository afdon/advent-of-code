

import fs from "fs";

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

function validate(string: string) {
    switch (string) {
        case value1:
          // command is a 
        case value2:
          statements
        // …
        case valueN:
          statements
        default:
          statements
      }
}