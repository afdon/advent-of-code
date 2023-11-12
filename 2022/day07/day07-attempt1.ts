// Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?

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

  let rootContents = listRootContents(lines)
  console.log(rootContents)

}

const root = {
  child1: {}
  // child2: {}
}

// const root = {
//   name: "/",
//   children: [child1, child2]
// }

// const child1 = {
//   name: "child1",
//   children: []
// }

// find the contents of the parent folder.

function listRootContents (lines: string[]): string[] {
  let rootContents: string[] = []
  // just assume there's a "$ cd /" command somewhere, followed by "$ ls" on the next line
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].charAt(0) === "$" && lines[i].charAt(2) === "c" && lines[i].charAt(3) === "d" && lines[i].charAt(5) === "/") {
      if (lines[i+1].charAt(0) === "$" && lines[i+1].charAt(2) === "l" && lines[i+1].charAt(3) === "s") {
        // while the next line begins with "dir" or a number, push that line into an array.
        let j = i + 2
        console.log(`lines[j] is: ${lines[j]} and its type is:`, typeof lines[j])
        while (lines[j].charAt(0) !== "$") {
          console.log(`typeof lines[j]: ${typeof lines[j]}; lines[j]: ${lines[j]}`)
          rootContents.push(lines[j])
          j++
          console.log(`j:`, j)
        }
      }
    }
  }
  return rootContents
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
    // string.charAt(5) is the size of a file
    // and the word after the number is the file name
  } else {
    console.log("Unable to parse output.")
  }

}