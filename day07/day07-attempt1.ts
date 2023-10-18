

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

  if (string.charAt(0) === "$") {
    if (string.charAt(2) === "c" && string.charAt(3) == "d") {
      if (string.charAt(5) === "/") {
        // you're changing to the parent folder.
      } else if (string.charAt(5) === "..") {
        // you're jumping up a folder level
      } else {
        // string.charAt(5) is the beginning of the folder name.
      }
    } else if (string.charAt(2) === "l" && string.charAt(3) === "s") {
      // the next few files are directories inside the current folder.
    }
  } else if (string.charAt(0) === "d" && string.charAt(1) === "i" && string.charAt(2) === "r") {
    // string.charAt(5) is the start of a directory name
  } else if (typeof string.charAt(0) === "number") {
    // string.charAt(5) is the size of a folder OR file
    // and the word after the number is...
    // either a filename.extension (with DOT)
    // or a directory name (without DOT)
  } else {
    console.log("Unable to parse output.")
  }

}